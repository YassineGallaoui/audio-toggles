"use client"

import { useState, ReactElement, useEffect } from "react";
import styles from "./style.module.scss"
import React from "react";

const AudioIconContainer = ({ children, allAudioOn }: { children: ReactElement<{ audioOn: boolean }>, allAudioOn: boolean }) => {
    const itemsGridSettings = ` col-2 col-md-2 col-lg-3`;
    const [audioOn, setAudioOn] = useState<boolean>(true);

    useEffect(() => {
        if (allAudioOn) {
            setAudioOn(true)
        } else {
            setAudioOn(false)
        }
    }, [allAudioOn])

    const childWithProps = React.cloneElement(children, { audioOn });

    return (
        <div className={styles.gridItem + itemsGridSettings} onClick={() => setAudioOn(!audioOn)}>
            {/* <div className={styles.gridGuide}></div> */}
            {childWithProps}
        </div>
    )
}

export default AudioIconContainer