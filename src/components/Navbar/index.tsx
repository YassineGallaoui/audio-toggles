import Link from "next/link";
import style from './style.module.scss';
import NavbarLinks from "./NavbarLink";

const Navbar = () => {

    return (
        <nav className={style.navContainer + " fixed wp-100 z-10"}>
            <div className={"container py-1"}>
                <div className="col-1 col-md-1 col-sm-1 flex justify-start align-center">
                    <Link
                        href={"/"}
                        style={{ lineHeight: '0' }}
                    >
                        Home
                    </Link>
                </div>
                <NavbarLinks></NavbarLinks>
            </div>
        </nav>
    )
}

export default Navbar;