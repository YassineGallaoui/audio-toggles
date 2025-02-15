"use client"

import { useState } from "react";
import AudioIconContainer from "../AudioIconContainer";
import AudioIcon1 from "../AudioIcons/AudioIcon1"
import AudioIcon2 from "../AudioIcons/AudioIcon2"
import AudioIcon3 from "../AudioIcons/AudioIcon3";
import styles from "./style.module.scss"


const IconsGrid = () => {
    const [allAudioOn, setAllAudioOn] = useState<boolean>(true);

    return (
        <>
            <div className="col-12 flex justify-end items-center">
                <button className={styles.enableDisableButton} onClick={() => setAllAudioOn(!allAudioOn)}>
                    {allAudioOn ? "disable all" : "enable all"}
                </button>
            </div>
            <AudioIconContainer allAudioOn={allAudioOn}>
                <AudioIcon1 />
            </AudioIconContainer>

            <AudioIconContainer allAudioOn={allAudioOn}>
                <AudioIcon2></AudioIcon2>
            </AudioIconContainer>

            <AudioIconContainer allAudioOn={allAudioOn}>
                <AudioIcon3></AudioIcon3>
            </AudioIconContainer>
        </>
    )
}

export default IconsGrid