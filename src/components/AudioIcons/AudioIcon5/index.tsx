'use client'

import { motion } from 'motion/react';
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

const AudioIcon5: React.FC<AudioIconProps> = ({ audioOn, sizeProp }) => {
    const [size, setSize] = useState<SizeType>(sizeProp ?? { w: 100, h: 100 });
    const [isInitialTransition, setIsInitialTransition] = useState(true);

    useEffect(() => {
        if (sizeProp != null)
            setSize(sizeProp)
        else
            setSize({ w: 100, h: 100 });
    }, [sizeProp]);

    // Handle the initial transition when audioOn first becomes true
    useEffect(() => {
        if (audioOn && isInitialTransition) {
            const timer = setTimeout(() => {
                setIsInitialTransition(false);
            }, 500); // Match this with the duration of the initial transition

            return () => clearTimeout(timer);
        }

        if (!audioOn) {
            // Reset for next time audioOn becomes true
            setIsInitialTransition(true);
        }
    }, [audioOn, isInitialTransition]);

    return (
        <svg
            width={size.w}
            height={size.h}
            viewBox={`${-1 * (size.w / 2)} ${-1 * (size.h / 2)} ${size.w} ${size.h}`}
            className={styles.svg + ' ' + (audioOn ? styles.on : '')}
        >
            {/* Bottom Circle */}
            {audioOn ? (
                isInitialTransition ? (
                    // Initial transition from small to starting animation size
                    <motion.circle
                        cx={0}
                        cy={0}
                        fill="rgba(255, 255, 255, 0.2)"
                        initial={{ r: 5 }}
                        animate={{ r: 25 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                    />
                ) : (
                    // Continuous animation that loops within the array
                    <motion.circle
                        cx={0}
                        cy={0}
                        fill="rgba(255, 255, 255, 0.2)"
                        initial={{ r: 25 }}
                        animate={{ r: [25, 30, 25, 27, 24, 29, 25] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                )
            ) : (
                <motion.circle
                    cx={0}
                    cy={0}
                    fill="rgba(255, 255, 255, 0.2)"
                    animate={{ r: 5 }}
                    initial={isInitialTransition ? { r: 5 } : { r: 25 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                />
            )}

            {/* Top Circle */}
            {audioOn ? (
                isInitialTransition ? (
                    // Initial transition from small to starting animation size
                    <motion.circle
                        cx={0}
                        cy={0}
                        fill="rgba(255, 255, 255, 0.2)"
                        initial={{ r: 5 }}
                        animate={{ r: 15 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                    />
                ) : (
                    // Continuous animation that loops within the array
                    <motion.circle
                        cx={0}
                        cy={0}
                        fill="rgba(255, 255, 255, 0.2)"
                        initial={{ r: 15 }}
                        animate={{ r: [15, 20, 15, 17, 14, 19, 15] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                )
            ) : (
                <motion.circle
                    cx={0}
                    cy={0}
                    fill="rgba(255, 255, 255, 0.2)"
                    animate={{ r: 5 }}
                    initial={isInitialTransition ? { r: 5 } : { r: 15 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                />
            )}
        </svg>
    );
};

export default AudioIcon5;