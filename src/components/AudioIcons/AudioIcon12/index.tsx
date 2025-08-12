 
'use client'

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styles from './style.module.scss';
import { AudioIconProps } from '../AudioIcon1';

const AudioIcon12: React.FC<AudioIconProps> = React.memo(({ audioOn }) => {
    const [pathData1, setPathData1] = useState('');
    const [pathData2, setPathData2] = useState('');
    const [amplitude, setAmplitude] = useState(0);
    const [t, setT] = useState(0);


    const generateSineWavePath = useCallback((t: number, amp: number, p: number = 0) => {
        const scale = 2.6;
        const step = 0.1;
        const points: string[] = new Array(Math.floor(20 / step));
        let i = 0;

        for (let x = -10; x <= 10; x += step) {
            const y = amp * Math.sin(p + x * 0.25 + t * 5);
            points[i++] = `${(x * scale).toFixed(2)},${(-y * scale).toFixed(2)}`;
        }

        return `M ${points.join(' L ')}`;
    }, []);

    useEffect(() => {
        let animationFrame: number;
        let startTime: number;
        const duration = 300; // Animation duration in ms
        const maxAmplitude = 1.0;

        const animateAmplitude = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const targetAmp = audioOn ? maxAmplitude : 0;
            const currentAmp = audioOn
                ? progress * maxAmplitude
                : (1 - progress) * maxAmplitude;

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

    const [newPathData1, newPathData2] = useMemo(() => {
        return [
            generateSineWavePath(t, amplitude * 2),
            generateSineWavePath(t, amplitude * 0.8, 1)
        ];
    }, [t, amplitude, generateSineWavePath]);

    useEffect(() => {
        setPathData1(newPathData1);
        setPathData2(newPathData2);
    }, [newPathData1, newPathData2]);

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
                className={styles.path1}
                d={pathData1}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                className={styles.path2}
                d={pathData2}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
});

AudioIcon12.displayName = "AudioIcon12";

export default AudioIcon12;