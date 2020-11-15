import React, { ReactNode } from 'react'
import styles from './Promote.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {
  children?: ReactNode
  title?: string
}

const Promote = ({}: Props) => (
    <section className={styles.promoteContainer}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className={styles.promoteTitle}>Create Your Own Professional Website</h2>
                    <p className={styles.promoteSubtitle}>Globally parallel task granular alignments through excellent intellectual capital. Globally deploy vertical leadership.</p>
                    <div className={styles.pointContainer}>
                        <span><FontAwesomeIcon icon={faCheckCircle} /></span>
                        <span className={[styles.promotePoint, "ml-2"].join(' ')}>Flexible, Easy to Use Control Panel</span>
                    </div>
                    <div className={styles.pointContainer}>
                        <span><FontAwesomeIcon icon={faCheckCircle} /></span>
                        <span className={[styles.promotePoint, "ml-2"].join(' ')}>Unmetered Bandwidth</span>
                    </div>
                    <div className={styles.pointContainer}>
                        <span><FontAwesomeIcon icon={faCheckCircle} /></span>
                        <span className={[styles.promotePoint, "ml-2"].join(' ')}>Unmetered Sub Domains, FTP Accounts</span>
                    </div>
                    <div className={styles.pointContainer}>
                        <span><FontAwesomeIcon icon={faCheckCircle} /></span>
                        <span className={[styles.promotePoint, "ml-2"].join(' ')}>99% Uptime Guarantee</span>
                    </div>
                    <div className={styles.pointContainer}>
                        <span><FontAwesomeIcon icon={faCheckCircle} /></span>
                        <span className={[styles.promotePoint, "ml-2"].join(' ')}>45-Day Money-Back Guarantee</span>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.promoteButton}>Get Started Now</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="https://themetags.net/whmcs/templates/hostlar-standard/img/data-center.svg" alt=""/>
                </div>
            </div>
        </div>
    </section>
)

export default Promote
