import React, { useState } from 'react';
import styles from '../style.module.scss';
import Accordion from './Accordion';

interface ControlsSectionProps {
    onClose: () => void;
    previewAudioOn: boolean;
    setPreviewAudioOn: (v: boolean) => void;
    formula: string;
    setFormula: (v: string) => void;
    error: string | null;
    colorOn: string;
    setColorOn: (v: string) => void;
    colorOff: string;
    setColorOff: (v: string) => void;
    useCustomColors: boolean;
    setUseCustomColors: (v: boolean) => void;
    // New props
    componentName: string;
    setComponentName: (v: string) => void;
    lineWidth: number;
    setLineWidth: (v: number) => void;
    svgSize: number;
    setSvgSize: (v: number) => void;
    handleDownload: () => void;
}

const ControlsSection: React.FC<ControlsSectionProps> = ({
    onClose,
    previewAudioOn,
    setPreviewAudioOn,
    formula,
    setFormula,
    error,
    colorOn,
    setColorOn,
    colorOff,
    setColorOff,
    useCustomColors,
    setUseCustomColors,
    componentName,
    setComponentName,
    lineWidth,
    setLineWidth,
    svgSize,
    setSvgSize,
    handleDownload
}) => {
    // Local UI state for accordions
    const [isFormulaOpen, setIsFormulaOpen] = useState(true);
    const [isColorsOpen, setIsColorsOpen] = useState(false);
    const [isMiscOpen, setIsMiscOpen] = useState(false);

    return (
        <div className={styles.controlsSection}>
            <div className={styles.header}>
                <h2>Create Audio Toggle Wave</h2>
                <button className={styles.closeButton} onClick={onClose}>✕</button>
            </div>

            <div className={styles.controlGroup}>
                <label>Component Name</label>
                <input
                    type="text"
                    className={styles.input}
                    value={componentName}
                    onChange={(e) => setComponentName(e.target.value)}
                    placeholder="CustomAudioIcon"
                />
            </div>

            <div className={styles.controlGroup}>
                <label>Toggle State</label>
                <button
                    className={styles.downloadButton}
                    style={{ marginTop: 0, padding: '0.5rem' }}
                    onClick={() => setPreviewAudioOn(!previewAudioOn)}
                >
                    {previewAudioOn ? "State: ON (Click to Pause)" : "State: OFF (Click to Play)"}
                </button>
            </div>

            <Accordion
                label="Wave Formula"
                isOpen={isFormulaOpen}
                onToggle={() => setIsFormulaOpen(!isFormulaOpen)}
            >
                <div style={{ paddingBottom: '0.5rem' }}>
                    <textarea
                        className={styles.textarea}
                        value={formula}
                        onChange={(e) => setFormula(e.target.value)}
                        spellCheck={false}
                    />
                    {error && <p style={{ color: '#ff4444', fontSize: '0.8rem' }}>{error}</p>}
                </div>
            </Accordion>

            <Accordion
                label="Colors"
                isOpen={isColorsOpen}
                onToggle={() => setIsColorsOpen(!isColorsOpen)}
            >
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={useCustomColors}
                        onChange={(e) => setUseCustomColors(e.target.checked)}
                    />
                    Use custom colors
                </label>
                <div className={`${styles.colorInputWrapper} ${!useCustomColors ? styles.disabled : ''}`}>
                    <div className={styles.colorInputContainer}>
                        <span>ON Color</span>
                        <input
                            type="color"
                            className={styles.input + " " + styles.colorInput}
                            value={colorOn}
                            onChange={(e) => setColorOn(e.target.value)}
                        />
                    </div>
                    <div className={styles.colorInputContainer}>
                        <span>OFF Color</span>
                        <input
                            type="color"
                            className={styles.input + " " + styles.colorInput}
                            value={colorOff}
                            onChange={(e) => setColorOff(e.target.value)}
                        />
                    </div>
                </div>
            </Accordion>

            <Accordion
                label="Misc"
                isOpen={isMiscOpen}
                onToggle={() => setIsMiscOpen(!isMiscOpen)}
            >
                <div className={styles.controlGroup} style={{ marginBottom: '1rem' }}>
                    <label>Line Width (px)</label>
                    <input
                        type="number"
                        min="0.1"
                        step="0.1"
                        className={styles.input}
                        value={lineWidth}
                        onChange={(e) => setLineWidth(parseFloat(e.target.value))}
                    />
                </div>
                <div className={styles.controlGroup}>
                    <label>SVG Size (px)</label>
                    <input
                        type="number"
                        min="20"
                        max="1000"
                        className={styles.input}
                        value={svgSize}
                        onChange={(e) => setSvgSize(parseInt(e.target.value) || 200)}
                    />
                </div>
            </Accordion>

            <button className={styles.downloadButton} onClick={handleDownload}>
                <span>Download Components</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </button>
        </div>
    );
};

export default ControlsSection;
