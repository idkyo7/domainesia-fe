import React, { ReactNode } from 'react'
import styles from './Features.module.css'
import MiniFeatures from './MiniFeatures'

type Props = {
  children?: ReactNode
  title?: string
}

const Features = ({}: Props) => (
    <section className={styles.featuresContainer} id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <MiniFeatures 
                        title="Buy A Domain" 
                        subtitle="Whether you are looking for a personal website hosting plan" 
                    />
                </div>
                <div className="col-md-3">
                    <MiniFeatures 
                        title="Order Hosting" 
                        subtitle="Whether you are looking for a personal website hosting plan" 
                    />
                </div>
                <div className="col-md-3">
                    <MiniFeatures 
                        title="Make Payment" 
                        subtitle="Whether you are looking for a personal website hosting plan" 
                    />
                </div>
                <div className="col-md-3">
                    <MiniFeatures 
                        title="Get Support" 
                        subtitle="Whether you are looking for a personal website hosting plan" 
                    />
                </div>
            </div>
        </div>
    </section>
)

export default Features;
