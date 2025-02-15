import Link from 'next/link';
import style from './style.module.scss'

const Footer = () => {
    return (
        <footer className={style.footer + ' mt-4'}>
            <div className='container pt-4'>
                <div className={"flex flex-col col-4 col-md-4 col-lg-6 mb-4"}>
                    <span className={'text-bold'}>{`
                    Audio Toggles`}</span>
                    <span style={{ marginTop: "0.3rem" }}>{`Handcrafted by `}
                        <Link
                            href="https://www.yassinegallaoui.com/"
                            target="_blank" rel="noopener noreferrer">
                            {`Yassine's`}
                        </Link>
                        {` fairy fingers`}
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;