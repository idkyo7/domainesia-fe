import React, { ReactNode } from 'react'
import styles from './Features.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Features = ({}: Props) => (
    <section className={styles.featuresContainer}>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia officiis nostrum libero quam corporis dolorem laboriosam maxime velit, deserunt repellat, hic quasi similique culpa dicta veniam tenetur sapiente est!
                </div>
                <div className="col-md-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia officiis nostrum libero quam corporis dolorem laboriosam maxime velit, deserunt repellat, hic quasi similique culpa dicta veniam tenetur sapiente est!
                </div>
                <div className="col-md-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia officiis nostrum libero quam corporis dolorem laboriosam maxime velit, deserunt repellat, hic quasi similique culpa dicta veniam tenetur sapiente est!
                </div>
                <div className="col-md-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia officiis nostrum libero quam corporis dolorem laboriosam maxime velit, deserunt repellat, hic quasi similique culpa dicta veniam tenetur sapiente est!
                </div>
            </div>
        </div>
    </section>
)

export default Features;
