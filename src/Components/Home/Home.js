import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import RamadanBanar1 from "../../images/Web-Banar-Ramadan-21.jpg";
import LalShobujCoverBanner1 from "../../images/Lal-Shobuj-Cover-1.jpg";
import KidsFbBanner2 from "../../images/Kids-FB-Banar (2).jpg";
import Card2Banner from '../../images/Card-02.jpg'
import Footer from '../Footer/Footer';
import kidsLogo from '../../images/Logo TV.png';
import { Carousel } from 'react-bootstrap';



const Home = () => {
    const PF = "http://localhost:5000/images/";

    const [programs, setPrograms] = useState([]);
    const [banners, setBanners] = useState([]);

    const [link, setLink] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/programs')
            .then(res => res.json())
            .then(data => {
                setPrograms(data);
                console.log(data);
            })
        fetch('http://localhost:5000/api/banners')
            .then(res => res.json())
            .then(data => {
                setBanners(data);
                console.log(data);
            })
    }, [])



    return (
        <div className="bg-warning">
            <Header></Header>
            <main>
                <div className="cont">
                    <section>

                        <section className="mb-5">
                            <div id="video-container">
                                <div className="live mt-5">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/y2Zq2P4uOhs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="row">
                                        <div className="col-3"></div>
                                        <div className="col-6">
                                            <div id="player"></div>
                                        </div>
                                        <div className="col-3"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>


                    <section className="mySlider">
                        <Carousel interval={1000}>
                            {
                                banners.map((banner, index) =>
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={PF+banner.photo}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                )
                            }

                        </Carousel>
                    </section>

                    <section id="contents" className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {programs.map(program =>
                                <div className="d-flex justify-content-center col">
                                    <div className="card">
                                        <div className="card-video">
                                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${program.link.split('/')[3]}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                        </div>
                                        <div className="card-body">

                                            <button onClick={() => setLink(`https://www.youtube.com/embed/${program.link.split('/')[3]}`)} type="button" className="btn btn-primary" style={{ width: '100%' }}
                                                data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Watch
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            )}
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Watching Video</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <iframe width="560" height="315"
                                                src={link} frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>

            </main>
            <section className="container mt-5" id="about-us">
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

            <Footer />
        </div>
    );
};

export default Home;