import React, { ReactNode } from 'react'
import styles from './Solution.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {
  children?: ReactNode
  title?: string
}

const Solution = ({}: Props) => (
    <section className={styles.solutionContainer}>
        <div className="container">
            <div className="row">
                
            </div>
        </div>
    </section>
)

export default Solution;
