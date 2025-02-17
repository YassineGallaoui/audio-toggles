"use client"

import { useState } from "react";
import AudioIconContainer from "../AudioIconContainer";
import AudioIcon1 from "../AudioIcons/AudioIcon1";
import AudioIcon2 from "../AudioIcons/AudioIcon2";
import AudioIcon3 from "../AudioIcons/AudioIcon3";
import AudioPlayer from "../AudioPlayer";
import CustomSelect, { SelectOption } from "../CustomSelect";

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
            <AudioPlayer src={selectedMp3} audioOn={audioOn} />



            <AudioIconContainer index={0} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon1 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={1} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon2 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={2} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon3 audioOn={audioOn} />
            </AudioIconContainer>
        </>
    )
}

export default IconsGrid