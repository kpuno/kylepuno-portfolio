import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic08 from '../../assets/images/ap-mobile.png'

const Autopulse = (props) => (
    <Layout>
        <Helmet>
            <title>Kyle Puno Portfolio</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding 
            title={'Autopulse'}
            description={'PWA with responsive design for desktop and mobile'}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technologies</h2>
                    </header>
                    <p>React, Redux, neutrino.js, material-ui, axios, gsap</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Brief Description</h3>
                            </header>
                            <p>This application allowed the user to query cars scraped from kijiji, autotrader and craigslist.</p>
                            <ul className="actions">
                                <li><a target="_blank" href="https://www.autopulse.io" className="button">PWA</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Autopulse