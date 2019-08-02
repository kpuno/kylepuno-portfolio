import React from 'react'

import avatar from '../assets/images/avatar.png'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <img src={avatar} alt="avatar" className="image avatar" />
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">kylepuno@outlook.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(647) 770-5248</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Toronto, Ontario</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
