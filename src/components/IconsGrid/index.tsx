"use client"

import { useState } from "react";
import AudioIconContainer from "../AudioIconContainer";
import AudioIcon1 from "../AudioIcons/AudioIcon1"
import AudioIcon2 from "../AudioIcons/AudioIcon2"
import AudioIcon3 from "../AudioIcons/AudioIcon3";
import CustomSelect, { SelectOption } from "../CustomSelect";
import AudioPlayer from "../AudioPlayer";

const IconsGrid = () => {
    const defaultAudioOptions: SelectOption[] = [
        {
            label: "Ocean",
            mp3Link: "./ocean.mp3"
        }, {
            label: "Forest",
            mp3Link: "./forest.mp3"
        }, {
            label: "Windy Mountain",
            mp3Link: "./mountain.mp3"
        }, {
            label: "Binaural Beats - Gamma",
            mp3Link: "./bbGamma.mp3"
        }, {
            label: "Binaural Beats - Beta",
            mp3Link: "./bbBeta.mp3"
        }, {
            label: "Binaural Beats - Alpha",
            mp3Link: "./bbAlpha.mp3"
        }, {
            label: "Binaural Beats - Theta",
            mp3Link: "./bbTheta.mp3"
        }, {
            label: "Binaural Beats - Delta",
            mp3Link: "./bbDelta.mp3"
        },
    ]

    /* const [allAudioOn, setAllAudioOn] = useState<boolean>(true); */
    const [selectedMp3, setSelectedMp3] = useState<string>(defaultAudioOptions[0].mp3Link);
    const [audioOn, setAudioOn] = useState<boolean>(true);

    return (
        <>
            <CustomSelect
                className={`col-4 col-md-3 offset-md-5 col-lg-3 offset-lg-9 mb-2`}
                placeholder={defaultAudioOptions[0].label}
                options={defaultAudioOptions}
                onSelect={(v: string) => { setSelectedMp3(v); setAudioOn(true); }}
            />
            {/* <div className="col-4 col-md-2 col-lg-2 flex justify-end items-center mb-4">
                <button
                    className={styles.enableDisableButton}
                    onClick={() => setAllAudioOn(!allAudioOn)}
                >
                    {allAudioOn ? "Disable All" : "Enable All"}
                </button>
            </div> */}
            <AudioPlayer src={selectedMp3} audioOn={audioOn} />



            <AudioIconContainer /* allAudioOn={allAudioOn} */ index={0} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon1 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer /* allAudioOn={allAudioOn} */ index={1} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon2 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer /* allAudioOn={allAudioOn} */ index={2} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon3 audioOn={audioOn} />
            </AudioIconContainer>
        </>
    )
}

export default IconsGrid