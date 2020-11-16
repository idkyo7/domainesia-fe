import React, { ReactNode } from 'react'
import styles from './MiniHosting.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

// hosting props validation from its parent component
type Props = {
    backup: string;
    domain: string;
    id: string;
    packageName: string;
    price: string;
    ssl: string;
    storage: string;
    support: string;
    uptime: number;
    webQuantity: number;
    bandwidth: string;
}

const MiniSolution = ({
    backup,
    domain,
    packageName,
    price,
    ssl,
    storage,
    support,
    uptime,
    webQuantity,
    bandwidth
}: Props) => (
    <div className={[styles.miniContainer, "rounded"].join(' ')}>
        <h5>{packageName}</h5>
<h3 className={styles.subtitle}><span className={styles.mainSubtitle}>${price}</span> /month</h3>
        <hr/>
        <div className={styles.miniContent}>
            <p>
                <b>{webQuantity}</b> Websites
            </p>
            <p>
                <b>{storage}</b> RAID Storage
            </p>
            <p>
                <b>{bandwidth}</b> Bandwidth
            </p>
            <p>
                <b>{ssl}</b> SSL Certificate
            </p>
            <p>
                <b>{domain}</b> Included
            </p>
            <p>
                <b>{uptime}%</b> Uptime
            </p>
            <p>
                <b>{support}</b> Phone Support
            </p>
            <p>
                {backup}
            </p>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.miniButton}>Purchase Now</button>
        </div>
    </div>
)

export default MiniSolution;
