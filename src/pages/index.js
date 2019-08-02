import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/ap-desktop.png'
import pic02 from '../assets/images/quest-admin.png'
import pic03 from '../assets/images/fsp-admin1.png'
import pic04 from '../assets/images/isp.png'
import pic05 from '../assets/images/reactssr.png'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Kyle Puno Portfolio"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Front-end Developer</h2>
                        </header>
                        <p>I'm passionate about web application development (React/Redux) and mobile application development through PWAs and an interest in Flutter. 
                            I have experience with back end technologies using go lang and gRPCs. Below are the projects that I've worked on through out the years personally, and working at Pilot Interactive.</p>
                    </div>
                </section>
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Autopulse</h3>
                                <p>Pilot Interactive Project</p>
                            </header>
                            <Link to="/projects/autopulse" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Quest Learning</h3>
                                <p>Pilot Interactive Project</p>
                            </header>
                            <Link to="/projects/quest" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Fantasy Sports Productions</h3>
                                <p>Pilot Interactive Project</p>
                            </header>
                            <Link to="/projects/fsp" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Intelligent Stock Picker</h3>
                                <p>Personal Project</p>
                            </header>
                            <Link to="/projects/isp" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>React SSR</h3>
                                <p>Personal Project</p>
                            </header>
                            <Link to="/projects/reactssr" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Personal Project</p>
                            </header>
                            <Link to="/projects/reactgraphql" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex