import React, { ReactNode } from 'react'
import styles from './MiniSolution.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

type Props = {
    img: string;
    title: string;
    subtitle: string;
    start: string;
}

const MiniSolution = ({img, title, subtitle, start}: Props) => (
    <div className={[styles.miniContainer, "rounded"].join(' ')}>
        <div className={[styles.miniImg, "text-center"].join(' ')}>
            <img src={img} alt="" className={styles.imgIcon} />
        </div>
        <p className={styles.miniTitle}>{title}</p>
        <p className={styles.miniSubtitle}>{subtitle}</p>
        <p className={styles.miniStart}>Starting at: {start}</p>
        <div className="text-center">
            <button className={styles.miniButton}>View Details</button>
        </div>
    </div>
)

export default MiniSolution;
