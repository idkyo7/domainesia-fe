import React, { ReactNode } from 'react'
import styles from './Solution.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import MiniSolution from './MiniSolution'

type Props = {
  children?: ReactNode
  title?: string
}

const Solution = ({}: Props) => (
    <section className={styles.solutionContainer}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className={styles.solutionTitle}>We Have Hosting Solution For You</h2>
                    <p className={styles.solutionSubtitle}>Synergistically architect plug-and-play vortals without next-generation manufactured products. Assertively develop synergistic networks.</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <MiniSolution 
                        img="https://themetags.net/whmcs/templates/hostlar-standard/img/icon-shared-hosting.svg"
                        title="Shared Hosting"
                        subtitle="Our most popular product! Shared Web Hosting gives you a free domain name, fast SSD storage hosting."
                        start="$2.59/mo"
                    />
                </div>
                <div className="col-md-4">
                    <MiniSolution 
                        img="https://themetags.net/whmcs/templates/hostlar-standard/img/icon-wordpress-hosting.svg"
                        title="Wordpress Hosting"
                        subtitle="Our most popular product! Shared Web Hosting gives you a free domain name, fast SSD storage hosting."
                        start="$2.59/mo"
                    />
                </div>
                <div className="col-md-4">
                    <MiniSolution 
                        img="https://themetags.net/whmcs/templates/hostlar-standard/img/icon-vps-hosting.svg"
                        title="VPS Hosting"
                        subtitle="Our most popular product! Shared Web Hosting gives you a free domain name, fast SSD storage hosting."
                        start="$2.59/mo"
                    />
                </div>
                <div className="col-md-4">
                    <MiniSolution 
                        img="https://themetags.net/whmcs/templates/hostlar-standard/img/icon-dadicate-hosting.svg"
                        title="Dedicated Hosting"
                        subtitle="Our most popular product! Shared Web Hosting gives you a free domain name, fast SSD storage hosting."
                        start="$2.59/mo"
                    />
                </div>
                <div className="col-md-4">
                    <MiniSolution 
                        img="https://themetags.net/whmcs/templates/hostlar-standard/img/icon-website-builder.svg"
                        title="WP Website Builder"
                        subtitle="Our most popular product! Shared Web Hosting gives you a free domain name, fast SSD storage hosting."
                        start="$2.59/mo"
                    />
                </div>
                <div className="col-md-4">
                    <MiniSolution 
                        img="https://themetags.net/whmcs/templates/hostlar-standard/img/icon-cloud-hosting.svg"
                        title="Cloud Hosting"
                        subtitle="Our most popular product! Shared Web Hosting gives you a free domain name, fast SSD storage hosting."
                        start="$2.59/mo"
                    />
                </div>
            </div>
        </div>
    </section>
)

export default Solution;
