import React, { ReactNode } from 'react'
import styles from './MiniFeatures.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

type Props = {
    icon?: string;
    title: string;
    subtitle: string;
}

const MiniFeatures = ({title, subtitle}: Props) => (
    <div className={[styles.miniContainer, "rounded"].join(' ')}>
        <div className={styles.miniIcon}>
            <div className="text-center">
                <span className={styles.miniSpan}>
                    <FontAwesomeIcon icon={faGlobe} />
                </span>
            </div>
            <p className={styles.miniTitle}>
                {title}
            </p>
            <p className={styles.miniSubtitle}>
                {subtitle}
            </p>
        </div>
    </div>
)

export default MiniFeatures;
