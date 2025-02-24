'use client'

import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';

export type SizeType = {
    w: number,
    h: number,
}
export interface AudioIconProps {
    audioOn?: boolean;
    sizeProp?: SizeType
}

const AudioIcon6: React.FC<AudioIconProps> = ({ audioOn, sizeProp }) => {
    const [size, setSize] = useState<SizeType>(sizeProp ?? { w: 100, h: 100 });

    useEffect(() => {
        if (sizeProp != null)
            setSize(sizeProp)
        else
            setSize({ w: 100, h: 100 });
    }, [sizeProp]);

    return (
        <svg
            width={size.w}
            height={size.h}
            viewBox={`${-1 * (size.w / 2)} ${-1 * (size.h / 2)} ${size.w} ${size.h}`}
            className={`${styles.svg} ${audioOn ? styles.on : styles.off}`}
        >
            {/* Bottom Circle */}
            <circle
                cx={0}
                cy={0}
                r={5}
                fill="rgba(255, 255, 255, 0.2)"
                className={styles.outerCircle}
            />

            {/* Top Circle */}
            <circle
                cx={0}
                cy={0}
                r={5}
                fill="rgba(255, 255, 255, 0.2)"
                className={styles.innerCircle}
            />
        </svg>
    );
};

export default AudioIcon6;