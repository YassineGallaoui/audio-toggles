/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'motion/react';

export type SizeType = {
    w: number,
    h: number,
}
export interface AudioIconProps {
    audioOn?: boolean;
    sizeProp?: SizeType
}

const AudioIcon5: React.FC<AudioIconProps> = ({ audioOn, sizeProp }) => {
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
            className={styles.svg + ' ' + (audioOn ? styles.on : '')}
        >
            {/* Bottom Circle */}
            <motion.circle
                cx={0}
                cy={0}
                fill="rgba(255, 255, 255, 0.5)"
                initial={{ r: 5 }}
                animate={{
                    r: audioOn ? [25, 30, 25] : 5,
                    transition: audioOn
                        ? {
                            // Step 1: Smoothly grow to 25
                            r: {
                                duration: 2,
                                ease: 'easeInOut',
                                // After reaching 25, start oscillating
                                times: [0, 0.3, 1], // Timing points for keyframes
                                values: [5, 25, [28, 30, 27]], // From 5 to 25, then oscillate
                                repeat: Infinity,
                            },
                        }
                        : {
                            duration: 0.3,
                            ease: 'easeInOut',
                        },
                }}
            />

            {/* Top Circle */}
            <motion.circle
                cx={0}
                cy={0}
                fill="rgba(255, 255, 255, 0.5)"
                initial={{ r: 5 }}
                animate={{
                    r: audioOn ? [15, 25, 15] : 5,
                    transition: audioOn
                        ? {
                            // Step 1: Smoothly grow to 15
                            r: {
                                duration: 1.5,
                                ease: 'easeInOut',
                                // After reaching 15, start oscillating
                                times: [0, 0.3, 1], // Timing points for keyframes
                                values: [5, 20, [18, 25, 23]], // From 5 to 15, then oscillate
                                repeat: Infinity,
                            },
                        }
                        : {
                            duration: 0.3,
                            ease: 'easeInOut',
                        },
                }}
            />
        </svg>
    );
};

export default AudioIcon5;