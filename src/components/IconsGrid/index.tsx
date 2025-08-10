import AudioIconContainer from "../AudioIconContainer";
import AudioIcon1 from "../AudioIcons/AudioIcon1";
import AudioIcon10 from "../AudioIcons/AudioIcon10";
import AudioIcon11 from "../AudioIcons/AudioIcon11";
import AudioIcon12 from "../AudioIcons/AudioIcon12";
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

    return (
        <div className="sub-grid col-12">
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
        </div>
    )
}

export default IconsGrid