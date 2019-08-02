import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic08 from '../../assets/images/reactssr2.png'

const Autopulse = (props) => (
    <Layout>
        <Helmet>
            <title>Kyle Puno Portfolio</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding 
            title={'React SSR'}
            description={'Based off of Stephen Griders React Server Side Rendering Course on Udemy'}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technologies</h2>
                    </header>
                    <p>React, Redux, OAuth, JWT, webpack, SEO</p>
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
                            <p>Users can log in through OAuth to view a list of Admins. If the user is not logged in, they can only view the list of Users. 
                              Just a basic application to practice server-side-rendering.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Link</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Autopulse