import React, { ReactNode } from 'react'
import styles from './Support.module.css'

type Props = {
  children?: ReactNode
  title?: string
}


const Support = ({}: Props) => {
    return (
        <section className={styles.supportContainer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className={styles.supportTitle}>Need Some Help?</h2>
                        <p className={styles.supportSubtitle}>Whether you’re stuck or just want some tips on where to start, hit up our experts anytime.</p>
                        <p className={styles.supportContent}>
                            Sales Chat: <strong>MON-FRI 8AM-4PM WIB</strong> | Customer Support Chat: <strong>Every Day 5:30AM–9:30PM WIB</strong>
                        </p>
                        <div className={styles.buttonContainer}>
                            <button className={[styles.btnPrimary, "btn-primary"].join(' ')}>Chat With Us</button>
                            <button className={[styles.btnSecondary, "btn-light"].join(' ')}>Send Us Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Support;
