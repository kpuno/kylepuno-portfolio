import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic08 from '../../assets/images/fsp-mobile.png'

const Fsp = (props) => (
    <Layout>
        <Helmet>
            <title>Kyle Puno Portfolio</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding 
            title={'Fantasy Sports Production'}
            description={'Admin Panel that allows the admin to create networks and customize the PWA'}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technologies</h2>
                    </header>
                    <p>React, Redux, neutrino.js, styled-components, fetch api</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Brief Description</h3>
                            </header>
                            <p>Admin panel that allows the admin to create games and customize the PWA associated with it. 
                                The admin is able to customize all the strings in the PWA, as well as the fonts, colors, and image assets.</p>
                            <ul className="actions">
                                <li><a href="https://admin.fantasysports.productions" className="button">Admin Panel</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Fsp