'use client';

import Link from "next/link";
import { useState } from 'react';
import AudioToggleCreator from '../AudioToggleCreator';
import style from './style.module.scss';

const Navbar = () => {
    const [isCreatorOpen, setIsCreatorOpen] = useState(false);

    return (
        <>
            <nav className={style.navContainer + " fixed wp-100 z-10"}>
                <div className={"container py-1"}>
                    <div className="row">
                        <div className="col-11 md-col-7 sm-col-3 flex jc-start ai-center">
                            <Link
                                href={"/"}
                                style={{ lineHeight: '0', fontSize: '1.4rem', padding: `1rem 0rem` }}
                            >
                                {`Audio Toggles`}
                            </Link>
                        </div>
                        <button
                            className={style.createButton + " col-1 md-col-1 sm-col-1 flex jc-center ai-center"}
                            onClick={() => setIsCreatorOpen(true)}
                        >
                            New
                        </button>
                    </div>
                </div>
            </nav>
            <AudioToggleCreator isOpen={isCreatorOpen} onClose={() => setIsCreatorOpen(false)} />
        </>
    )
}

export default Navbar;