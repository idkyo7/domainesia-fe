import React, { ReactNode } from 'react'
import styles from './Guarantee.module.css'

type Props = {
  children?: ReactNode
  title?: string
}


const Guarantee = ({}: Props) => {
    return (
        <section className={styles.guaranteeContainer} id="contactus">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className={styles.guaranteeTitle}>30-day Money-back Guarantee</h2>
                        <p className={styles.guaranteeSubtitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus ex numquam consectetur atque, deleniti, explicabo animi unde in saepe hic quia vel! Optio impedit natus officiis consectetur, eius ex.
                        </p>
                        <div className={styles.buttonContainer}>
                            <button className={[styles.btnPrimary, "btn-primary"].join(' ')}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Guarantee;
