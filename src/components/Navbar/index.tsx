import Link from "next/link";
import style from './style.module.scss';

const Navbar = () => {

    return (
        <nav className={style.navContainer + " fixed wp-100 z-10"}>
            <div className={"container py-1"}>
                <div className="row">
                    <div className="col-10 md-col-6 sm-col-3 flex jc-start ai-center">
                        <Link
                            href={"/"}
                            style={{ lineHeight: '0', fontSize: '1.4rem', padding: `1rem 0rem` }}
                        >
                            {`Audio Toggles`}
                        </Link>
                    </div>
                    {/* <button className={style.createButton + " col-2 md-col-2 sm-col-1 flex jc-center ai-center"}>
                        Create your own
                    </button> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;