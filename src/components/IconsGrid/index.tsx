import AudioIconContainer from "../AudioIconContainer";
import AudioIcon1 from "../AudioIcons/AudioIcon1";
import AudioIcon10 from "../AudioIcons/AudioIcon10";
import AudioIcon11 from "../AudioIcons/AudioIcon11";
import AudioIcon12 from "../AudioIcons/AudioIcon12";
import AudioIcon13 from "../AudioIcons/AudioIcon13";
import AudioIcon2 from "../AudioIcons/AudioIcon2";
import AudioIcon3 from "../AudioIcons/AudioIcon3";
import AudioIcon4 from "../AudioIcons/AudioIcon4";
import AudioIcon5 from "../AudioIcons/AudioIcon5";
import AudioIcon6 from "../AudioIcons/AudioIcon6";
import AudioIcon7 from "../AudioIcons/AudioIcon7";
import AudioIcon8 from "../AudioIcons/AudioIcon8";
import AudioIcon9 from "../AudioIcons/AudioIcon9";

interface IconsGridProps {
    audioOn: boolean,
    setAudioOn: (v: boolean) => void
}

const IconsGrid = ({ audioOn, setAudioOn }: IconsGridProps) => {

    const AudioIcons = [
        AudioIcon1,
        AudioIcon2,
        AudioIcon3,
        AudioIcon4,
        AudioIcon5,
        AudioIcon6,
        AudioIcon7,
        AudioIcon8,
        AudioIcon9,
        AudioIcon10,
        AudioIcon11,
        AudioIcon12,
        AudioIcon13
    ]

    return (
        <div className="sub-grid col-12">
            {AudioIcons.map((IconComponent, index) => {
                console.log("index", index);
                return (
                    <AudioIconContainer key={index} index={index} changeAudioOn={() => setAudioOn(!audioOn)}>
                        <IconComponent audioOn={audioOn} />
                    </AudioIconContainer>
                )
            })}
        </div>
    )
}

export default IconsGrid