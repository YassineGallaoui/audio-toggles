'use client';

import React, { useState, useRef, useEffect } from "react";
import styles from './style.module.scss'

export interface SelectOption {
    label: string;
    mp3Link: string;
}

interface CustomSelectProps {
    options: SelectOption[];
    onSelect: (value: string) => void;

    placeholder?: string;
    className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    onSelect,
    placeholder = "Select an option",
    className = null
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(placeholder);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle clicking outside the dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle selecting an option
    const handleSelect = (option: SelectOption) => {
        setSelectedLabel(option.label);
        onSelect(option.mp3Link);
        setIsOpen(false);
    };

    return (
        <div className={`${styles.customSelect} ${className}`} ref={dropdownRef}>
            <div
                className={styles.selectedValue}
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                tabIndex={0}
            >
                <span>{selectedLabel}</span>
                <svg
                    className={styles.arrow}
                    style={{ transform: isOpen ? `rotateZ(180deg)` : `rotateZ(0deg)`, height: `1.1rem`, transition: `all 0.3s` }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {isOpen && (
                <ul className={styles.options}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            role="option"
                            aria-selected={selectedLabel === option.label}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;