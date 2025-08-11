'use client'

import { motion, AnimatePresence } from 'motion/react';
import React, { useEffect, useState, useMemo } from 'react';
import styles from './style.module.scss';

export type SizeType = {
    w: number,
    h: number,
}
export interface AudioIconProps {
    audioOn?: boolean;
    sizeProp?: SizeType
}

const AudioIcon5: React.FC<AudioIconProps> = React.memo(({ audioOn = false, sizeProp }) => {
    const [size, setSize] = useState<SizeType>(sizeProp ?? { w: 100, h: 100 });
    const [isInitialTransition, setIsInitialTransition] = useState(true);

    const defaultSize = useMemo(() => ({ w: 100, h: 100 }), []);

    useEffect(() => {
        setSize(sizeProp ?? defaultSize);
    }, [sizeProp, defaultSize]);

    useEffect(() => {
        if (!audioOn) {
            setIsInitialTransition(true);
            return;
        }

        if (isInitialTransition) {
            const timer = setTimeout(() => {
                setIsInitialTransition(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [audioOn, isInitialTransition]);

    const svgClassName = useMemo(() => {
        return `${styles.svg} ${audioOn ? styles.on : ''}`;
    }, [audioOn]);

    const viewBox = useMemo(() => {
        return `${-1 * (size.w / 2)} ${-1 * (size.h / 2)} ${size.w} ${size.h}`;
    }, [size.w, size.h]);

    return (
        <svg
            width={size.w}
            height={size.h}
            viewBox={viewBox}
            className={svgClassName}
        >
            <AnimatePresence mode="wait">
                {/* Bottom Circle */}
                {audioOn && (
                    <motion.circle
                        key="bottom-circle"
                        cx={0}
                        cy={0}
                        fill="rgba(255, 255, 255, 0.2)"
                        initial={{ r: 5 }}
                        animate={{ 
                            r: isInitialTransition 
                                ? 25 
                                : [25, 30, 25, 27, 24, 29, 25]
                        }}
                        exit={{
                            r: 5,
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                        transition={isInitialTransition 
                            ? {
                                duration: 0.5,
                                ease: "easeOut"
                            }
                            : {
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "loop"
                            }
                        }
                    />
                )}

                {/* Top Circle */}
                {audioOn && (
                    <motion.circle
                        key="top-circle"
                        cx={0}
                        cy={0}
                        fill="rgba(255, 255, 255, 0.2)"
                        initial={{ r: 5 }}
                        animate={{ 
                            r: isInitialTransition 
                                ? 15 
                                : [15, 20, 15, 17, 14, 19, 15]
                        }}
                        exit={{
                            r: 5,
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                        transition={isInitialTransition 
                            ? {
                                duration: 0.5,
                                ease: "easeOut"
                            }
                            : {
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "loop"
                            }
                        }
                    />
                )}

                {/* Static circles when audio is off */}
                {!audioOn && (
                    <>
                        <motion.circle
                            key="static-bottom"
                            cx={0}
                            cy={0}
                            r={5}
                            fill="rgba(255, 255, 255, 0.2)"
                        />
                        <motion.circle
                            key="static-top"
                            cx={0}
                            cy={0}
                            r={5}
                            fill="rgba(255, 255, 255, 0.2)"
                        />
                    </>
                )}
            </AnimatePresence>
        </svg>
    );
});

export default AudioIcon5;