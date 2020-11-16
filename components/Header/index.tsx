import React, { ReactNode } from 'react'
import styles from './Header.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Header = ({}: Props) => (
    <header className={styles.headerContainer}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <section id="main-menu">
                    <nav className={[styles.headerContent, "navbar navbar-expand-lg"].join(' ')}>
                        <a className={[styles.navbar, "navbar-brand mr-5"].join(' ')} href="#">Domainesia</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className={[styles.navLink, "nav-item nav-link active"].join(' ')} href="#home">Home <span className="sr-only">(current)</span></a>
                                <a className={[styles.navLink, "nav-item nav-link"].join(' ')} href="#features">Features</a>
                                <a className={[styles.navLink, "nav-item nav-link"].join(' ')} href="#benefit">Benefits</a>
                                <a className={[styles.navLink, "nav-item nav-link"].join(' ')} href="#solution">Solution</a>
                                <a className={[styles.navLink, "nav-item nav-link"].join(' ')} href="#support">Support</a>
                                <a className={[styles.navLink, "nav-item nav-link"].join(' ')} href="#price">Price</a>
                                <a className={[styles.navLink, "nav-item nav-link"].join(' ')} href="#contactus">Contact Us</a>
                            </div>
                        </div>
                        <div className={styles.accountContainer}>
                            <a className={[styles.navLink, "nav-item nav-link"].join(' ')} href="#">Account</a>
                        </div>
                    </nav>
                </section>
                </div>
            </div>
        </div>
    </header>
)

export default Header
