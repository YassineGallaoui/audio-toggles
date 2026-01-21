import { useCallback, useEffect, useState } from 'react';

interface UseAudioAnimationProps {
    isOpen: boolean;
    previewAudioOn: boolean;
    formula: string;
    MAX_AMP?: number;
    DURATION?: number;
}

export const useAudioAnimation = ({
    isOpen,
    previewAudioOn,
    formula,
    MAX_AMP = 5.0,
    DURATION = 300
}: UseAudioAnimationProps) => {
    const [pathData, setPathData] = useState('');
    const [amplitude, setAmplitude] = useState(0);
    const [t, setT] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // 1. Time loop
    useEffect(() => {
        if (!isOpen) return;
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
    }, [isOpen]);

    // 2. Amplitude animation loop
    useEffect(() => {
        if (!isOpen) return;
        let animationFrame: number;
        let startTime: number | null = null;

        const animateAmplitude = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / DURATION, 1);

            const targetAmp = previewAudioOn ? MAX_AMP : 0;
            // Example used: audioOn ? progress * max : (1-progress) * max
            const currentAmp = previewAudioOn
                ? progress * MAX_AMP
                : (1 - progress) * MAX_AMP;

            setAmplitude(currentAmp);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animateAmplitude);
            }
        };

        animationFrame = requestAnimationFrame(animateAmplitude);
        return () => cancelAnimationFrame(animationFrame);
    }, [previewAudioOn, isOpen, DURATION, MAX_AMP]);

    // 3. Generate Path
    const generatePath = useCallback((time: number, amp: number) => {
        const scale = 2.6;
        const step = 0.1;
        const pointsArray: string[] = [];

        try {
            const userFunc = new Function('x', 't', 'amp', `
                try {
                    return ${formula};
                } catch(e) { return 0; }
            `);

            for (let x = -10; x <= 10; x += step) {
                let rawY = userFunc(x, time, amp);

                if (typeof rawY !== 'number' || isNaN(rawY)) {
                    rawY = 0;
                }

                const modulatedY = rawY * (amp / MAX_AMP);
                pointsArray.push(`${(x * scale).toFixed(2)},${(-modulatedY * scale).toFixed(2)}`);
            }
            setError(null);
        } catch (e: any) {
            setError(e.message);
            return '';
        }

        if (pointsArray.length === 0) return '';
        return `M ${pointsArray.join(' L ')}`;
    }, [formula, MAX_AMP]);

    // Update path data
    useEffect(() => {
        const newPath = generatePath(t, amplitude);
        setPathData(newPath);
    }, [t, amplitude, generatePath]);

    return { pathData, error };
};
