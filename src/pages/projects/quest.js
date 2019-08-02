import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic08 from '../../assets/images/quest-mobile.png'

const Quest = (props) => (
    <Layout>
        <Helmet>
            <title>Kyle Puno Portfolio</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding 
            title={'Quest Learning'}
            description={'Admin Panel to create tasks and games, and PWA to play the games and complete tasks'}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technologies</h2>
                    </header>
                    <p>React, Redux, neutrino.js, fetch api</p>
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
                            <p>Admin panel allows the admin to create and customize live and on demand games with questions and images. 
                                The PWA allows the user to play the games as well as have a visual representation of their account progressing through a mountain.</p>
                            <ul className="actions">
                                <li><a target="_blank" href="https://admin.questlearning.ca" className="button">Admin Panel</a></li>
                                <li><a target="_blank" href="https://questlearning.ca" className="button">PWA</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Quest