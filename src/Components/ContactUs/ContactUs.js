import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
const ContactUs = () => {
    return (
        <div className="bg-warning">
            <Navbar />
            <main id="contact-us" style={{ height: '72.76vh' }}  class="mt-5">
                <div class="cont">
                    <section id="contact" class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mt-5">
                                <FontAwesomeIcon icon={faHome} /><strong> Mohakhali DOHS</strong>
                                </div>
                                <div class="mt-3">
                                <FontAwesomeIcon icon={faPhone} /><strong> 01734-722280</strong>
                                </div>
                                <div class="mt-3">
                                <FontAwesomeIcon icon={faEnvelope} /><strong> contact@kidscreation.tv</strong>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <form class="row g-3">
                                    <div class="col-12">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter your name here" />
                                    </div>
                                    <div class="col-12">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter email address" />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="subject" class="form-label">Subject</label>
                                        <input type="text" class="form-control" id="subject" placeholder="Enter subject" />
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-4">
                                <div class="form-floating">
                                    <textarea class="mt-4 form-control" placeholder="Enter Message" id="floatingTextarea2" style={{height:'220px',resize:'none'}}></textarea>
                                    <label for="floatingTextarea2">Enter message</label>
                                </div>
                                <div class="mt-2" style={{float:'right'}}>
                                    <input class="btn btn-primary" type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;