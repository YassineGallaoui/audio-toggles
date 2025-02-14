import style from './style.module.scss'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className='container pt-4 h-min-50'>
                <div className={"section flex flex-col col-4 col-md-4 col-lg-6 mb-4"}>
                    <span className={'text-bold'}>NextJS Boilerplate</span>
                    <span className={style.smallText}>(6 columns on desktop, 4 on tablet and mobile)</span>
                    <span>motto</span>
                </div>
                <div className={"section flex flex-col col-2 col-md-2 col-lg-3 mb-4"}>
                    <span className='text-bold'>SECTION 1</span>
                    <span className={style.smallText}>(3 columns on desktop, 2 on tablet and mobile)</span>
                    <ul>
                        <li><Link href={'/'}>random 1</Link></li>
                        <li><Link href={'/'}>random 2</Link></li>
                        <li><Link href={'/'}>random 3</Link></li>
                    </ul>
                </div>
                <div className={"section flex flex-col col-2 col-md-2 col-lg-3 mb-4"}>
                    <span className='text-bold'>SECTION 2</span>
                    <span className={style.smallText}>(3 columns on desktop, 2 on tablet and mobile)</span>
                    <ul>
                        <li>random 4</li>
                        <li>random 5</li>
                        <li>random 6</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;