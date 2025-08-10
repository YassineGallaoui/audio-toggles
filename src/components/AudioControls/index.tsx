import AudioPlayer from '../AudioPlayer';
import CustomSelect, { SelectOption } from '../CustomSelect';
import styles from './style.module.scss';

interface AudioControlsProps {
    defaultAudioOptions: SelectOption[],
    setSelectedMp3: (v: string) => void,
    setAudioOn: (v: boolean) => void,
    selectedMp3: string,
    audioOn: boolean
}

const AudioControls = ({
    defaultAudioOptions,
    setSelectedMp3,
    setAudioOn,
    selectedMp3,
    audioOn
}: AudioControlsProps) => {

    return (
        <div className="sub-grid col-12">
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
        </div>
    )
}

export default AudioControls;