import React, { ReactNode, useState, useEffect } from 'react'
import styles from './Hosting.module.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import MiniHosting from './MiniHosting'

type Props = {
  children?: ReactNode
  title?: string
}

type apiDataProps = {
    backup: string;
    domain: string;
    id: string;
    packageName: string;
    price: string;
    ssl: string;
    storage: string;
    support: string;
    uptime: number;
    webQuantity: number;
    bandwidth: string;
}

const defaultApiData: apiDataProps[] = [];

const Hosting = ({}: Props) => {
    const [apiData, setApiData] = useState(defaultApiData);
    
    //use this for fetching api immediately after page loads
    //use my mockapi for online mockapi services
    useEffect(() => {
        (async () => {
            const result = await axios.get(
                "https://5fb1de2b87ed490016ea8260.mockapi.io/package"
            );
            setApiData(result.data);
        })();
    }, []);

    console.log(apiData)

    return (
        <section className={styles.hostingContainer} id="price">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className={styles.hostingTitle}>Managed Our Hosting Price</h2>
                        <p className={styles.hostingSubtitle}>Distinctively recaptiualize principle-centered core competencies through client-centered core competencies. Enthusiastically provide access.</p>
                    </div>
                </div>
                <div className="row mt-3">
                    {
                        apiData && apiData.map((data) => (
                            <div className="col-md-4">
                                <MiniHosting 
                                    backup={data.backup}
                                    bandwidth={data.bandwidth}
                                    domain={data.domain}
                                    id={data.id}
                                    packageName={data.packageName}
                                    price={data.price}
                                    ssl={data.ssl}
                                    storage={data.storage}
                                    support={data.support}
                                    webQuantity={data.webQuantity}
                                    uptime={data.uptime}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}


export default Hosting;
