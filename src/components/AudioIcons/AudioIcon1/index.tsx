/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useCallback, useEffect, useState } from 'react';
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

const AudioIcon1: React.FC<AudioIconProps> = ({ audioOn, sizeProp }) => {
    const [size, setSize] = useState<SizeType>(sizeProp ?? { w: 100, h: 100 })
    const heights = [10, 15, 20, 10, 8];
    const [rectWidth, setRectWidth] = useState<number>(2);
    const [rectPos, setRectPos] = useState<number[]>([
        -20 - rectWidth,
        -10 - rectWidth,
        0 - rectWidth,
        10 - rectWidth,
        20 - rectWidth
    ]);

    const svgHeight = 18;

    const calculateColumnPositions = useCallback(() => {
        if (sizeProp != null) {
            const w = sizeProp.w;
            const columnWidth = (w / 2) / 20;
            const gutterWidth = (w - (5 * columnWidth)) / 4;
            const totalWidth = (5 * columnWidth) + (4 * gutterWidth);
            const startX = (w - totalWidth) / 2;

            const columnPositions: number[] = [];
            for (let i = 0; i < 5; i++) {
                const position = startX + i * (columnWidth + gutterWidth);
                columnPositions.push(position);
            }

            return columnPositions;
        } else {
            return [-20 - rectWidth, -10 - rectWidth, 0 - rectWidth, 10 - rectWidth, 20 - rectWidth];
        }
    }, [])

    useEffect(() => {
        if (sizeProp != null)
            setSize(sizeProp)
        else
            setSize({ w: 100, h: 100 });

        setRectPos(calculateColumnPositions())

    }, [calculateColumnPositions, sizeProp])

    useEffect(() => {
        setRectWidth(size.w / 25)
    }, [size])


    return (
        <svg
            width={size.w}
            height={size.h}
            viewBox={`${-1 * (size.w / 2)} ${-1 * (size.h / 2)} ${size.w} ${size.h}`}
            className={styles.svg + ' ' + (audioOn ? styles.on : '')}>
            {rectPos.map((x: number, index: number) => (
                <motion.rect
                    key={index}
                    x={x}
                    y={-svgHeight / 2}
                    width={rectWidth}
                    stroke={'none'}
                    initial={{ height: 2, y: (svgHeight) / 2 }}
                    animate={
                        audioOn
                            ? {
                                height: heights[index % heights.length],
                                y: (svgHeight - heights[index % heights.length]) / 2,
                                transition: {
                                    duration: 0.4 + 0.1 * index,
                                    repeat: Infinity,
                                    repeatType: 'mirror',
                                    ease: 'easeInOut',
                                },
                            }
                            : { height: 2, y: (svgHeight - 2) / 2 }
                    }
                />
            ))}
        </svg>
    )
};

export default AudioIcon1;