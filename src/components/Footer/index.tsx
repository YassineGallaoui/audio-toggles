import Link from 'next/link';
import style from './style.module.scss'

const Footer = () => {
    return (
        <footer className={style.footer + ' mt-4'}>
            <div className='container pt-4'>
                <div className={style.container + " flex flex-col col-4 col-md-4 col-lg-6 mb-4"}>
                    <span className={'text-bold'}>{`
                    Audio Toggles`}</span>
                    <span style={{ marginTop: "1rem" }}>{`Handcrafted by `}
                        <Link
                            href="https://www.yassinegallaoui.com/"
                            target="_blank" rel="noopener noreferrer">
                            {`Yas`}
                        </Link>
                    </span>
                    <span>{`Last update: 24 Feb 2025`}</span>
                </div>

                <div className={style.container + " flex flex-col col-4 col-md-4 col-lg-6 mb-4"}>
                    <span>{`Animations are made at code level`}</span>
                    <span>{`Some are made with the help of `}
                        <Link
                            href="https://motion.dev/"
                            target="_blank" rel="noopener noreferrer">
                            {`Motion`}
                        </Link>
                    </span>
                    <span>{`Some are made using (S)css in a relatively intense way`}</span>
                    <span>{`Running on Next.js v15.1.7`}</span>
                    <span>{`... more to come`}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;