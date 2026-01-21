import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './style.module.scss';

export interface AudioIconProps {
    audioOn: boolean;
}

const CustomAudioIcon: React.FC<AudioIconProps> = React.memo(({ audioOn }) => {
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
            const rawY = 6 * Math.exp(-0.05 * x * x) * Math.sin(x * 0.5 - 18 * t);
            // Enforce modulation
            const y = rawY * (amp / MAX_AMP);

            points[i++] = `${(x * scale).toFixed(2)},${(-y * scale).toFixed(2)}`;
        }

        return `M ${points.join(' L ')}`;
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
        return `${styles.svg} ${audioOn ? styles.on : ''}`;
    }, [audioOn]);

    return (
        <svg
            width="620"
            height="620"
            viewBox="-50 -50 100 100"
            fill="none"
            className={svgClassName}
        >
            <path
                d={pathData}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
});

CustomAudioIcon.displayName = "CustomAudioIcon";

export default CustomAudioIcon;