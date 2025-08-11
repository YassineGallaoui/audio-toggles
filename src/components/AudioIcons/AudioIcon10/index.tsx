/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styles from './style.module.scss';
import { AudioIconProps } from '../AudioIcon1';

const smoothstep = (x: number, a: number, b: number) => {
    const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
    return t * t * (3 - 2 * t);
};

const AudioIcon10: React.FC<AudioIconProps> = React.memo(({ audioOn }) => {
    const [pathData, setPathData] = useState('');
    const [amplitude, setAmplitude] = useState(0);
    const [t, setT] = useState(0);


    const generateSineWavePath = useCallback((t: number, amp: number) => {
        const scale = 2.6;
        const step = 0.1;
        const points: string[] = new Array(Math.floor(20 / step));
        let i = 0;

        for (let x = -10; x <= 10; x += step) {
            const y = (-amp) + amp * 2 * smoothstep(1, 0, Math.sin(x / 2 + 4 * t));
            points[i++] = `${(x * scale).toFixed(2)},${(-y * scale).toFixed(2)}`;
        }

        return `M ${points.join(' L ')}`;
    }, []);

    useEffect(() => {
        let animationFrame: number;
        let startTime: number;
        const duration = 300; // Faster animation duration
        const maxAmplitude = 5.0;

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

    const newPathData = useMemo(() => {
        return generateSineWavePath(t, amplitude);
    }, [t, amplitude, generateSineWavePath]);

    useEffect(() => {
        setPathData(newPathData);
    }, [newPathData]);

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

export default AudioIcon10;