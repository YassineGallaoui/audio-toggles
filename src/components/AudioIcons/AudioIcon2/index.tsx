/* eslin    const [amplitude, setAmplitude] = useState(0);
    const [time, setTime] = useState({ t: 0 });

    // Combine path generation and animation logic
    const { pathData } = useMemo(() => {
        const scale = 2.6;
        const step = 0.1;
        const points: string[] = new Array(Math.floor(20 / step));
        let i = 0;

        // Add a small base amplitude to ensure the wave is always visible
        const baseAmplitude = 0.1;
        const effectiveAmplitude = amplitude + baseAmplitude;

        for (let x = -10; x <= 10; x += step) {
            const y = effectiveAmplitude * Math.sin(x * 0.5 + time.t * 3);
            points[i++] = `${(x * scale).toFixed(2)},${(-y * scale).toFixed(2)}`;
        }

        return {
            pathData: `M ${points.join(' L ')}`
        };
    }, [time.t, amplitude]);t/no-img-element */
'use client'

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styles from './style.module.scss';
import { AudioIconProps } from '../AudioIcon1';

const AudioIcon2: React.FC<AudioIconProps> = React.memo(({ audioOn }) => {
    const [amplitude, setAmplitude] = useState(0);
    const [time, setTime] = useState({ t: 0 });

    // Combine path generation and animation logic
    const { pathData } = useMemo(() => {
        const scale = 2.6;
        const step = 0.1;
        const points: string[] = new Array(Math.floor(20 / step));
        let i = 0;

        for (let x = -10; x <= 10; x += step) {
            const y = amplitude * Math.sin(x * 0.5 + time.t * 4);
            points[i++] = `${(x * scale).toFixed(2)},${(-y * scale).toFixed(2)}`;
        }

        return {
            pathData: `M ${points.join(' L ')}`
        };
    }, [time.t, amplitude]);

    // Handle amplitude animation
    useEffect(() => {
        if (!audioOn && amplitude === 0) return; // Skip if already at target state

        let animationFrame: number;
        let startTime: number | null = null;
        const duration = 500;
        const startAmp = amplitude;
        const targetAmp = audioOn ? 1.0 : 0;

        const animateAmplitude = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const newAmp = startAmp + (targetAmp - startAmp) * progress;
            setAmplitude(newAmp);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animateAmplitude);
            }
        };

        animationFrame = requestAnimationFrame(animateAmplitude);
        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [audioOn]);

    // Handle continuous time animation
    useEffect(() => {
        let animationFrame: number;
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / 1000;

            // Update time as an object to ensure reference changes
            setTime({ t: progress });
            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, []);

    const svgClassName = useMemo(() => {
        return `${styles.svg} ${audioOn ? styles.on : ''}`;
    }, [audioOn]);

    return (
        <svg
            width="100"
            height="100"
            viewBox="-50 -50 100 100"
            fill="none"
            className={svgClassName}
        >
            <path
                d={pathData}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
});

AudioIcon2.displayName = "AudioIcon2";

export default AudioIcon2;