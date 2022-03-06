import React, { useEffect, useState } from 'react';
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
        <div  className="bg-warning">
            <Navbar />
            <main style={{ height: '100vh' }} className="mt-5 d-flex justify-content-center container flex-wrap">
                {upcomingPrograms.map((upcomingProgram,index) => <div key={index} style={{width:'400px',height:'400px',margin:'10px'}}className="text-center">
                <h2>{upcomingProgram.title}</h2>
                <img src={PF+ upcomingProgram.photo} style={{width:'400px',height:'250px'}} alt="" />
            </div>)}
           

            </main>
            <Footer />
        </div>
    );
};

export default UpcomingProgram;