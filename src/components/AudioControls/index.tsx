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
        <div className="row col-12">
            <button
                type="button"
                onClick={() => setAudioOn(!audioOn)}
                className={`${styles.playButton} col-4 md-col-1 lg-col-1 md-offset-4 lg-offset-8 md-mb-2`}>
                {!audioOn ? 'Play' : 'Pause'}
            </button>
            <CustomSelect
                className={`col-4 md-col-3 lg-col-3 mb-2`}
                placeholder={defaultAudioOptions[0].label}
                options={defaultAudioOptions}
                onSelect={(v: string) => { setSelectedMp3(v); setAudioOn(true); }}
            />
            <AudioPlayer src={selectedMp3} audioOn={audioOn} />
        </div>
    )
}

export default AudioControls;