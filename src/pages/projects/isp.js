import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import pic08 from '../../assets/images/isp2.png'

const Isp = (props) => (
    <Layout>
        <Helmet>
            <title>Kyle Puno Portfolio</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding 
            title={'Intelligent Stock Picker'}
            description={'Web Application that filters stocks based on indicators'}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technologies</h2>
                    </header>
                    <p>React, Redux, material-ui, axios, redux-thunk, d3.js</p>
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
                            <p>ISP will filter out all the unnecessary stocks that the user is not looking for, and will highlight which stocks
                              have been in a positive trend for them. From there, the specified stocks will be able to show trend history and bases its future 
                              predictions of the stock off the formulas used against those stock.  By being able to combine most of the current applications and 
                              added features, people will be more confident choosing stocks using this application.</p>
                            <ul className="actions">
                                <li><a href="https://www.intelligent-stock-picker.io" className="button">Link</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Isp