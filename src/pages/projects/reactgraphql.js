import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic08 from '../../assets/images/reactgraphql.png'

const Autopulse = (props) => (
    <Layout>
        <Helmet>
            <title>Kyle Puno Portfolio</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding 
            title={'React GraphQL'}
            description={'Based off of Stephen Griders GraphQL with React Course on Udemy'}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technologies</h2>
                    </header>
                    <p>React, react-apollo, webpack, bcrypt, mongo, express, GraphQL</p>
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
                            <p>Basic application that uses GraphQL's schema to define relations between data objects, authentication in GraphQL and integrate GraphQL with React.</p>
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