"use client";

import Link from "next/link";
import { useState } from "react";
import style from './style.module.scss';

const NavbarLinks = () => {
    const [openMobile, setOpenMobile] = useState(false);
    return (
        <div className="sub-grid col-11 md-col-7 sm-col-3">
            <div className={style.mobileBtnContainer + " sub-grid col-1 offset-3 flex flex-row jc-end ai-center z-10"} >
                <button
                    className={style.mobileBtn + " " + (openMobile ? style.show : '')}
                    onClick={() => setOpenMobile(!openMobile)}>
                </button>
            </div>
            <div className={
                style.navLinks + " " +
                (openMobile ? style.show : '') +
                " sub-grid col-11 md-col-7 sm-col-4"
            }>
                <ul className={"sub-grid col-11 md-col-7 sm-col-4 container-sm ai-center"}>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarLinks;