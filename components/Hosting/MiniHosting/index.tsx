import React, { ReactNode } from 'react'
import styles from './MiniHosting.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

type Props = {
    
}

const MiniSolution = ({}: Props) => (
    <div className={[styles.miniContainer, "rounded"].join(' ')}>
        <h5>Economy</h5>
        <h3 className={styles.subtitle}><span className={styles.mainSubtitle}>$6.69</span> /month</h3>
        <hr/>
        <div className={styles.miniContent}>
            <p>
                <b>10</b> Websites
            </p>
            <p>
                <b>Unlimited</b> RAID Storage
            </p>
            <p>
                <b>Unlimited</b> Bandwidth
            </p>
            <p>
                <b>Free</b> SSL Certificate
            </p>
            <p>
                <b>Free Domain</b> Included
            </p>
            <p>
                <b>99.99%</b> Uptime
            </p>
            <p>
                <b>24/7 </b> Phone Support
            </p>
            <p>
                Free Site Backup & Restore (Condition Apply)
            </p>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.miniButton}>Purchase Now</button>
        </div>
    </div>
)

export default MiniSolution;
