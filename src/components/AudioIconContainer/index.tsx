"use client"

import { ReactElement } from "react";
import styles from "./style.module.scss"
import React from "react";
import Link from "next/link";
import iconsData from "@/data/icons";

const AudioIconContainer = ({ children, index, changeAudioOn }: { children: ReactElement<{ audioOn: boolean }>, allAudioOn?: boolean, index: number, changeAudioOn: () => void }) => {
    const itemsGridSettings = ` col-2 col-md-2 col-lg-3`;

    const childWithProps = React.cloneElement(children);

    return (
        <div className={styles.gridItem + itemsGridSettings} onClick={() => changeAudioOn()}>
            {/* <div className={styles.gridGuide}></div> */}
            {childWithProps}
            <Link href={iconsData[index].link} className={styles.iconCodeLink} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
            </Link>
        </div>
    )
}

export default AudioIconContainer