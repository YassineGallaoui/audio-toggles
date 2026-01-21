import React from 'react';
import styles from '../style.module.scss';

interface AccordionProps {
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ label, isOpen, onToggle, children }) => {
    return (
        <div className={styles.controlGroup}>
            <div
                className={`${styles.accordionLabel} ${isOpen ? styles.open : ''}`}
                onClick={onToggle}
            >
                <label style={{ cursor: 'pointer' }}>{label}</label>
                <svg
                    className={styles.arrow}
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;
