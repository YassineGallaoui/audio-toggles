import Link from "next/link";
import style from './style.module.scss';

const Navbar = () => {

    return (
        <nav className={style.navContainer + " fixed wp-100 z-10"}>
            <div className={"container py-1"}>
                <div className="col-3 col-md-3 col-sm-3 flex justify-start align-center">
                    <Link
                        href={"/"}
                        style={{ lineHeight: '0', fontSize: '1.4rem', padding: `1rem 0rem` }}
                    >
                        {`Audio Toggles`}
                    </Link>
                </div>
                {/* <NavbarLinks></NavbarLinks> */}
            </div>
        </nav>
    )
}

export default Navbar;