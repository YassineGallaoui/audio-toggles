"use client"

import { useState } from "react";
import AudioIconContainer from "../AudioIconContainer";
import AudioIcon1 from "../AudioIcons/AudioIcon1";
import AudioIcon2 from "../AudioIcons/AudioIcon2";
import AudioIcon3 from "../AudioIcons/AudioIcon3";
import AudioPlayer from "../AudioPlayer";
import CustomSelect, { SelectOption } from "../CustomSelect";
import styles from './style.module.scss'
import AudioIcon4 from "../AudioIcons/AudioIcon4";
import AudioIcon5 from "../AudioIcons/AudioIcon5";
import AudioIcon6 from "../AudioIcons/AudioIcon6";
import AudioIcon7 from "../AudioIcons/AudioIcon7";
import AudioIcon8 from "../AudioIcons/AudioIcon8";
import AudioIcon9 from "../AudioIcons/AudioIcon9";
import AudioIcon10 from "../AudioIcons/AudioIcon10";
import AudioIcon11 from "../AudioIcons/AudioIcon11";
import AudioIcon12 from "../AudioIcons/AudioIcon12";

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
    const [audioOn, setAudioOn] = useState<boolean>(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setAudioOn(!audioOn)}
                className={`${styles.playButton} col-4 col-md-1 col-lg-1 offset-md-4 offset-lg-8 mb-md-2`}>
                {!audioOn ? 'Play' : 'Pause'}
            </button>
            <CustomSelect
                className={`col-4 col-md-3 col-lg-3 mb-2`}
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

            <AudioIconContainer index={3} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon4 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={4} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon5 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={5} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon6 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={6} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon7 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={7} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon8 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={8} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon9 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={9} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon10 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={10} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon11 audioOn={audioOn} />
            </AudioIconContainer>

            <AudioIconContainer index={11} changeAudioOn={() => setAudioOn(!audioOn)}>
                <AudioIcon12 audioOn={audioOn} />
            </AudioIconContainer>
        </>
    )
}

export default IconsGrid