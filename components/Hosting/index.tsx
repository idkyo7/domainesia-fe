import React, { ReactNode } from 'react'
import styles from './Hosting.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import MiniHosting from './MiniHosting'

type Props = {
  children?: ReactNode
  title?: string
}

const Hosting = ({}: Props) => (
    <section className={styles.solutionContainer}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className={styles.solutionTitle}>Managed Our Hosting Price</h2>
                    <p className={styles.solutionSubtitle}>Distinctively recaptiualize principle-centered core competencies through client-centered core competencies. Enthusiastically provide access.</p>
                </div>
            </div>
            <div className="row mt-3">
               <div className="col-md-4">
                   <MiniHosting />
               </div>
               <div className="col-md-4">
                   <MiniHosting />
               </div>
               <div className="col-md-4">
                   <MiniHosting />
               </div>
            </div>
        </div>
    </section>
)

export default Hosting;
