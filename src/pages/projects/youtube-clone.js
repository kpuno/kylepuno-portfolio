import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic08 from '../../assets/images/youtube-mobile.png'

const YTClone = (props) => (
    <Layout>
        <Helmet>
            <title>Kyle Puno Portfolio</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding 
            title={'YTClone'}
            description={'Youtube Clone'}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technologies</h2>
                    </header>
                    <p>React, Redux, material-ui, axios, youtube api</p>
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
                            <p>Basic youtube clone allows you to query and watch youtube videos and displays the top 5 videos.</p>
                            <ul className="actions">
                                <li><a target="_blank" href="https://youtube-clone-kylepuno.netlify.com/" className="button">Link</a></li>
                                <li><a target="_blank" href="https://github.com/kpuno/basic-youtube-clone" className="button">GIT</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default YTClone