import React from 'react';
import styles from '../style.module.scss';

interface PreviewSectionProps {
    previewAudioOn: boolean;
    setPreviewAudioOn: (v: boolean) => void;
    pathData: string;
    useCustomColors: boolean;
    colorOn: string;
    colorOff: string;
    lineWidth: number;
    svgSize: number;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({
    previewAudioOn,
    setPreviewAudioOn,
    pathData,
    useCustomColors,
    colorOn,
    colorOff,
    lineWidth,
    svgSize,
}) => {
    const [zoom, setZoom] = React.useState(1);
    const [isEditingZoom, setIsEditingZoom] = React.useState(false);
    const [tempZoomValue, setTempZoomValue] = React.useState('');

    const handleZoomIn = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoom(prev => Math.min(Number((prev + 0.1).toFixed(1)), 5));
    };

    const handleZoomOut = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoom(prev => Math.max(Number((prev - 0.1).toFixed(1)), 0.1));
    };

    const handleZoomClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // prevent preview toggle
        setTempZoomValue(Math.round(zoom * 100).toString());
        setIsEditingZoom(true);
    };

    const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempZoomValue(e.target.value);
    };

    const handleZoomSubmit = () => {
        const val = parseInt(tempZoomValue, 10);
        if (!isNaN(val)) {
            // Clamp between 10% and 500%
            const clamped = Math.min(Math.max(val, 10), 500);
            setZoom(clamped / 100);
        }
        setIsEditingZoom(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleZoomSubmit();
        if (e.key === 'Escape') setIsEditingZoom(false);
    };

    return (
        <div className={styles.previewSection}>
            <div
                onClick={() => setPreviewAudioOn(!previewAudioOn)}
                style={{
                    cursor: 'pointer',
                    transform: `scale(${zoom})`,
                    transition: 'transform 0.2s ease-out',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                title="Click to toggle animation"
            >
                <svg
                    width={svgSize}
                    height={svgSize}
                    viewBox="-50 -50 100 100"
                    fill="none"
                    className={`${styles.svg} ${previewAudioOn ? styles.on : ''}`}
                    style={{ width: svgSize, height: svgSize }}
                >
                    <path
                        d={pathData}
                        style={{
                            stroke: useCustomColors ? (previewAudioOn ? colorOn : colorOff) : undefined
                        }}
                        strokeWidth={lineWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className={styles.zoomControls} onClick={e => e.stopPropagation()}>
                <button onClick={handleZoomOut}>-</button>
                {isEditingZoom ? (
                    <input
                        className={styles.zoomInput}
                        value={tempZoomValue}
                        onChange={handleZoomChange}
                        onBlur={handleZoomSubmit}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        type="number"
                    />
                ) : (
                    <span onClick={handleZoomClick} style={{ cursor: 'pointer' }} title="Click to edit">
                        {Math.round(zoom * 100)}%
                    </span>
                )}
                <button onClick={handleZoomIn}>+</button>
            </div>
        </div>
    );
};

export default PreviewSection;
