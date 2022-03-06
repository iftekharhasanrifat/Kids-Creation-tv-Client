import React from 'react';
import kidsLogo from '../../images/Logo TV.png';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
    return (
        <div style={{backgroundColor: '#9FC5E8'}} >
            <Navbar/>
            <section className="container mt-5" style={{ height: '72.76vh' }} id="about-us">
                <div className="row">
                    <div className="col-md-6">
                        <img src={kidsLogo} className="w-100" alt="" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div id="about">
                            <h2 className="text-center">About Us</h2>
                            <p>We are an internet based TV channel designed for producing programs for kids. Our prime view is
                                to bring the young generation of our country under an ambience of polished and decorous culture
                                which shall reflect our core values and
                                faiths, social customs, national beliefs and above all true humanity. In order to get these
                                dreams materialized, we shall be always focusing on arranging and producing programs suitable
                                for children. InsaAllah, we do swear to give
                                our children a healthy substitute to mental nourishment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default AboutUs;