'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ControlsSection from './components/ControlsSection';
import PreviewSection from './components/PreviewSection';
import { useAudioAnimation } from './hooks/useAudioAnimation';
import { useDownloadGenerator } from './hooks/useDownloadGenerator';
import styles from './style.module.scss';

interface AudioToggleCreatorProps {
    isOpen: boolean;
    onClose: () => void;
}

const AudioToggleCreator: React.FC<AudioToggleCreatorProps> = ({ isOpen, onClose }) => {
    // 1. State Management
    const [formula, setFormula] = useState('6 * Math.exp(-0.05 * x * x) * Math.sin(x * 0.5 - 4 * t)');
    const [previewAudioOn, setPreviewAudioOn] = useState(true);

    // Component Name
    const [componentName, setComponentName] = useState('CustomAudioIcon');

    // Misc states
    const [svgSize, setSvgSize] = useState(200);
    const [lineWidth, setLineWidth] = useState(2);

    // Color states
    const [useCustomColors, setUseCustomColors] = useState(false);
    const [colorOn, setColorOn] = useState('#FF0000');
    const [colorOff, setColorOff] = useState('#FFFF00');

    // Reset preview state when modal opens
    useEffect(() => {
        if (isOpen) setPreviewAudioOn(true);
    }, [isOpen]);

    // Handle closing on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // 2. Custom Hooks
    // Animation Logic
    const { pathData, error } = useAudioAnimation({
        isOpen,
        previewAudioOn,
        formula
    });

    // Download Logic
    const { handleDownload } = useDownloadGenerator();

    const onDownloadClick = () => {
        handleDownload(formula, useCustomColors, colorOn, colorOff, componentName, lineWidth, svgSize);
    }

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>

                <PreviewSection
                    previewAudioOn={previewAudioOn}
                    setPreviewAudioOn={setPreviewAudioOn}
                    pathData={pathData}
                    useCustomColors={useCustomColors}
                    colorOn={colorOn}
                    colorOff={colorOff}
                    lineWidth={lineWidth}
                    svgSize={svgSize}
                />

                <ControlsSection
                    onClose={onClose}
                    previewAudioOn={previewAudioOn}
                    setPreviewAudioOn={setPreviewAudioOn}
                    formula={formula}
                    setFormula={setFormula}
                    error={error}
                    colorOn={colorOn}
                    setColorOn={setColorOn}
                    colorOff={colorOff}
                    setColorOff={setColorOff}
                    useCustomColors={useCustomColors}
                    setUseCustomColors={setUseCustomColors}
                    componentName={componentName}
                    setComponentName={setComponentName}
                    lineWidth={lineWidth}
                    setLineWidth={setLineWidth}
                    svgSize={svgSize}
                    setSvgSize={setSvgSize}
                    handleDownload={onDownloadClick}
                />
            </div>
        </div>,
        document.body
    );
};

export default AudioToggleCreator;
