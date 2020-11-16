import React, { ReactNode } from 'react'
import styles from './Carousel.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Header = ({}: Props) => (
    <section className={styles.carouselContainer} id="home">
        <div className="container">
            <div className="row">
                <div className={[styles.contentSearch, "col-md-6"].join(' ')}>
                    <div>
                    <h1 className={styles.title}>Unlimited Domain & Hosting in One Platform</h1>
                    <h5 className={styles.subtitle}>If your WordPress website is your personal business, we want you to succeed. We made our Hostlar hosting platform.</h5>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className={styles.animationImage}>
                        <img src="https://themetags.net/whmcs/templates/hostlar-standard/img/servers.svg" alt=""/>
                        <img src="https://themetags.net/whmcs/templates/hostlar-standard/img/animated-icon-1.png" alt="" className={[styles.animationImgOne, styles.animationImg].join(' ')}/>
                        <img src="https://themetags.net/whmcs/templates/hostlar-standard/img/animated-icon-2.png" alt="" className={[styles.animationImgTwo, styles.animationImg].join(' ')}/>
                        <img src="https://themetags.net/whmcs/templates/hostlar-standard/img/animated-icon-3.png" alt="" className={[styles.animationImgThree, styles.animationImg].join(' ')}/>
                        <img src="https://themetags.net/whmcs/templates/hostlar-standard/img/animated-icon-4.png" alt="" className={[styles.animationImgFour, styles.animationImg].join(' ')}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Header
