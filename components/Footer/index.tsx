import React, { ReactNode } from 'react'
import styles from './Footer.module.css'

type Props = {
  children?: ReactNode
  title?: string
}


const Footer = ({}: Props) => {
    return (
        <footer className={styles.footerContainer}>
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className={styles.footerContent}>Copyright © 2020, Basofi Ibnur Rohman</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <p className={styles.footerContent}>Domainesia-FE Test</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
