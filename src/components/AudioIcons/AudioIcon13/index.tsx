import React from 'react';
import styles from './style.module.scss';
import { AudioIconProps } from '../AudioIcon1';

const AudioIcon13: React.FC<AudioIconProps> = ({ audioOn }) => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="-50 -50 100 100"
            fill="none"
            className={`${styles.svg} ${audioOn ? styles.on : ''}`}
        >
            <rect
                width="50"
                height="5"
                y="-5" />
            <rect
                width="50"
                height="5"/>
        </svg>
    );
};

export default AudioIcon13;