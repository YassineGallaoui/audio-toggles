/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { AudioIconProps } from '../AudioIcon1';

const AudioIcon12: React.FC<AudioIconProps> = ({ audioOn }) => {

    const [pathData1, setPathData1] = useState('');
    const [pathData2, setPathData2] = useState('');
    const [amplitude, setAmplitude] = useState(0);
    const [t, setT] = useState(0);


    const generateSineWavePath = (t: number, amp: number, p?: number) => {
        const points = [];
        const scale = 2.6;
        const step = 0.1;

        for (let x = -10; x <= 10; x += step) {

            const y = amp * Math.sin((p ?? 0) + x * 1 / 4 + t * 3);
            points.push(`${(x * scale).toFixed(2)},${(-y * scale).toFixed(2)}`);
        }


        return `M ${points.join(' L ')}`;
    };

    useEffect(() => {
        let animationFrame: number;

        const animateAmplitude = () => {
            setAmplitude((prevAmp) => {
                const targetAmp = audioOn ? 1.0 : 0;
                const step = 0.02;


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
        }, 50);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        setPathData1(generateSineWavePath(t, amplitude * 2));
        setPathData2(generateSineWavePath(t, amplitude * 0.8, 1));
    }, [t, amplitude]);

    return (
        <svg width="100" height="100" viewBox="-50 -50 100 100" fill="none" className={styles.svg + ' ' + (audioOn ? styles.on : '')}>
            <path className={styles.path1} d={pathData1} strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            <path className={styles.path2} d={pathData2} strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
};

export default AudioIcon12;