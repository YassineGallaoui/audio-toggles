export const useDownloadGenerator = () => {
    const handleDownload = async (
        formula: string,
        useCustomColors: boolean,
        colorOn: string,
        colorOff: string,
        componentNameInput: string,
        lineWidth: number,
        svgSize: number
    ) => {
        const JSZip = (await import('jszip')).default;
        const { saveAs } = (await import('file-saver'));

        // Sanitize component name or fallback
        const finalComponentName = componentNameInput.trim() || 'CustomAudioIcon';

        // Remove spaces/special chars for filename safety if wanted, but basic trim is okay for now.
        // Best practice: PascalCase.
        const safeComponentName = finalComponentName.replace(/[^a-zA-Z0-9]/g, '');

        // We modify the template to also enforce the modulation
        const tsxContent = `
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styles from './style.module.scss';

export interface AudioIconProps {
    audioOn: boolean;
}

const ${safeComponentName}: React.FC<AudioIconProps> = React.memo(({ audioOn }) => {
    const [pathData, setPathData] = useState('');
    const [amplitude, setAmplitude] = useState(0);
    const [t, setT] = useState(0);
    const MAX_AMP = 5.0; // Define constant here for usageMain

    const generateWavePath = useCallback((t: number, amp: number) => {
        const scale = 2.6;
        const step = 0.1;
        const points: string[] = new Array(Math.floor(20 / step));
        let i = 0;

        for (let x = -10; x <= 10; x += step) {
            // User Formula
            const rawY = ${formula}; 
            // Enforce modulation
            const y = rawY * (amp / MAX_AMP);
            
            points[i++] = \`\${(x * scale).toFixed(2)},\${(-y * scale).toFixed(2)}\`;
        }

        return \`M \${points.join(' L ')}\`;
    }, []);

    useEffect(() => {
        let animationFrame: number;
        let startTime: number;
        const duration = 300;
        
        const animateAmplitude = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const currentAmp = audioOn
                ? progress * MAX_AMP
                : (1 - progress) * MAX_AMP;

            setAmplitude(currentAmp);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animateAmplitude);
            }
        };

        startTime = 0;
        animationFrame = requestAnimationFrame(animateAmplitude);

        return () => cancelAnimationFrame(animationFrame);
    }, [audioOn]);

    useEffect(() => {
        let animationFrame: number;
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / 1000;
            setT(progress);
            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const newPathData = useMemo(() => {
        return generateWavePath(t, amplitude);
    }, [t, amplitude, generateWavePath]);

    useEffect(() => {
        setPathData(newPathData);
    }, [newPathData]);

    const svgClassName = useMemo(() => {
        return \`\${styles.svg} \${audioOn ? styles.on : ''}\`;
    }, [audioOn]);

    return (
        <svg
            width="${svgSize}"
            height="${svgSize}"
            viewBox="-50 -50 100 100"
            fill="none"
            className={svgClassName}
        >
            <path
                d={pathData}
                strokeWidth="${lineWidth}"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
});

${safeComponentName}.displayName = "${safeComponentName}";

export default ${safeComponentName};
        `.trim();

        // Determine colors for SCSS
        const finalColorOff = useCustomColors ? colorOff : '#aaa';
        const finalColorOn = useCustomColors ? colorOn : '#fff';

        const scssContent = `
.svg {
    display: block;
    cursor: pointer;
    overflow: visible;

    path {
        stroke: ${finalColorOff}; /* Default Off Color */
        transition: stroke 0.3s ease;
    }

    &.on {
        path {
            stroke: ${finalColorOn}; /* Default On Color */
        }
    }
}
        `.trim();

        const zip = new JSZip();
        zip.file(`${safeComponentName}.tsx`, tsxContent);
        zip.file(`style.module.scss`, scssContent);

        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, `${safeComponentName}.zip`);
    };

    return { handleDownload };
};
