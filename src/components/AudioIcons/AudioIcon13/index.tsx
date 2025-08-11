'use client'

import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { AudioIconProps } from '../AudioIcon1';

const AudioIcon13: React.FC<AudioIconProps> = ({ audioOn }) => {

    const [rectWidth1, setRectWidth1] = useState(5);
    const [rectWidth2, setRectWidth2] = useState(5);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (audioOn) {
            interval = setInterval(() => {
                setRectWidth1(Math.floor(Math.random() * (100 - 20 + 1)) + 20);
                setRectWidth2(Math.floor(Math.random() * (100 - 20 + 1)) + 20);
            }, 500);
        } else {
            setRectWidth1(5);
            setRectWidth2(5);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [audioOn]);

    return (
        <svg
            width="100"
            height="100"
            viewBox="-50 -50 100 100"
            fill="none"
            className={`${styles.svg} ${audioOn ? styles.on : ''}`}
        >
            <rect width={rectWidth1} height="10" style={{ transition: 'width 0.5s ease-in-out' }} />
            <rect width={rectWidth2} height="10" style={{ transition: 'width 0.2s ease-in-out' }} />
        </svg>
    );
};

export default AudioIcon13;