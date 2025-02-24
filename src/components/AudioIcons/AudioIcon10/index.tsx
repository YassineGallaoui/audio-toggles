/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { AudioIconProps } from '../AudioIcon1';

function smoothstep(x: number, a: number, b: number) {
    const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
    return t * t * (3 - 2 * t);
}

const AudioIcon10: React.FC<AudioIconProps> = ({ audioOn }) => {

    const [pathData, setPathData] = useState('');
    const [amplitude, setAmplitude] = useState(0);
    const [t, setT] = useState(0);


    const generateSineWavePath = (t: number, amp: number) => {
        const points = [];
        const scale = 2.6;
        const step = 0.1;

        for (let x = -10; x <= 10; x += step) {
            //-1.5 + 3 * smoothstep(0,0,sin(x+t))
            const y = (-amp) + amp * 2 * smoothstep(1, 0, Math.sin(x / 2 + t));
            points.push(`${(x * scale).toFixed(2)},${(-y * scale).toFixed(2)}`);
        }

        return `M ${points.join(' L ')}`;
    };

    useEffect(() => {
        let animationFrame: number;

        const animateAmplitude = () => {
            setAmplitude((prevAmp) => {
                const targetAmp = audioOn ? 5.0 : 0;
                const step = 0.1;


                if (Math.abs(targetAmp - prevAmp) < step) {
                    return targetAmp;
                }

                return prevAmp + (targetAmp > prevAmp ? step : -step);
            });

            animationFrame = requestAnimationFrame(animateAmplitude);
        };

        animateAmplitude();

        return () => cancelAnimationFrame(animationFrame);
    }, [audioOn]);


    useEffect(() => {
        const interval = setInterval(() => {
            setT((prevT) => prevT + 0.1);
        }, 15);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        setPathData(generateSineWavePath(t, amplitude));
    }, [t, amplitude]);

    return (
        <svg width="100" height="100" viewBox="-50 -50 100 100" fill="none" className={styles.svg + ' ' + (audioOn ? styles.on : '')}>
            <path d={pathData} strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
};

export default AudioIcon10;