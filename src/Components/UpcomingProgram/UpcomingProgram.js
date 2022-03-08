import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const UpcomingProgram = () => {
    const PF = "http://localhost:5000/images/";
    const [upcomingPrograms, setUpcomingPrograms] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/upcomingPrograms`)
            .then(res => res.json())
            .then(data => {
                setUpcomingPrograms(data);
                console.log(data);
            })
    }, [])
    return (
        <div className="bg-warning">
            <Navbar />
            <main style={{ height: '100vh' }} className="mt-5 d-flex justify-content-center container flex-wrap">


                <Carousel interval={1000}>
                    {
                        upcomingPrograms.map((upcomingProgram, index) =>
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={PF + upcomingProgram?.photo}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 style={{backgroundColor: 'rgba(0,0,0,0.6)',borderRadius:'10px'}} className="p-2">{upcomingProgram?.title}</h3>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    }

                </Carousel>

            </main>
            <Footer />
        </div>
    );
};

export default UpcomingProgram;