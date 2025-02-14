"use client";

import Link from "next/link";
import style from './style.module.scss';
import { useState } from "react";

const NavbarLinks = () => {
    const [openMobile, setOpenMobile] = useState(false);
    return (
        <div className="sub-grid col-11 col-md-7 col-sm-3">
            <div className={style.mobileBtnContainer + " sub-grid col-1 offset-3 flex flex-row justify-end align-center z-10"} >
                <button
                    className={style.mobileBtn + " " + (openMobile ? style.show : '')}
                    onClick={() => setOpenMobile(!openMobile)}>
                </button>
            </div>
            <div className={
                style.navLinks + " " +
                (openMobile ? style.show : '') +
                " sub-grid col-11 col-md-7 col-sm-4"
            }>
                <ul className={"sub-grid col-11 col-md-7 col-sm-4 container-sm align-center"}>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    {/* <li className="offset-10 offset-md-6 flex justify-end sub-grid">
                        <Link href={"/auth"} aria-label={"click to login or signup"}>LOGIN</Link>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default NavbarLinks;