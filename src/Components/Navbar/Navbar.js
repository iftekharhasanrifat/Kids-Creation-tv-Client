import React from 'react';
import { Link } from 'react-router-dom';
import togglerIcon from '../../images/toggler-icon.svg'
import logo from '../../images/Logo TV.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
    return (
        <header>
            <section id="navbar" style={{ width: "100%", backgroundColor: 'green' }} >
                <div className="cont">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="social-links">
                            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/KidsCreation.TV"><FontAwesomeIcon className="text-primary" icon={faFacebook} /></a>
                            <a target='_blank'  rel="noreferrer" href="https://twitter.com/KidsCreationTV1"><FontAwesomeIcon className="text-primary" icon={faTwitter} /></a>
                            <a target='_blank' rel="noreferrer" id="youtube" href="https://www.youtube.com/KidsCreationTV"><FontAwesomeIcon className="text-danger" icon={faYoutube} /></a>
                        </div>
                        <div className="container-fluid ">
                            <Link id="logo" className="navbar-brand" to={'/'}>
                                <img src={logo} alt="" width="200px" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <img src={togglerIcon} alt="" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/program'}>Program</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/liveProgram'}>Live Program</Link>
                                    </li>
                                    {/* <!-- <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Up Coming</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Kids News</a>
                                </li> --> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/upcomingProgram'}>Up Coming</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/kidsNews'}>Kids News</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/aboutUs'}>About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/contactUS'}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </header>
    );
};

export default Navbar;