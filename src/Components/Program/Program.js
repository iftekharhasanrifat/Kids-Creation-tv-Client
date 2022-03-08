import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SideNavbar from '../SideNavbar/SideNavbar';

const Program = () => {

    const [programs, setPrograms] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/programs')
            .then(res => res.json())
            .then(data => {
                setPrograms(data);
                console.log(data);
            })
            setCategory('Know Your Country');
    }, [])

    const handleCategory = (cat) => {
        setCategory(cat);
    }

    return (
        <div className="bg-success">
            <Navbar />
            <main id="programs" className="mt-5">
                <div className="cont" >
                    <div className="programs-container">
                        <SideNavbar handleCategory={handleCategory} />
                        <div className="programs-container-content">
                            {category === '' || programs.filter(program => program.category === category).length === 0 ? <h2 className="text-danger">No data found</h2>
                                :
                                programs.filter(program => program.category === category).map((program,index) => <div className="vhw">
                                    <div className="programs-container-content-item">
                                        <iframe width="560" height="315" title={index} src={`https://www.youtube.com/embed/${program?.link.split('/')[3]}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                                )
                            }


                            {/* <div className="vhw">
                                <div className="programs-container-content-item">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Dtqio0iRunc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="vhw">
                                <div className="programs-container-content-item">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Dtqio0iRunc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="vhw">
                                <div className="programs-container-content-item">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Dtqio0iRunc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="vhw">
                                <div className="programs-container-content-item">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Dtqio0iRunc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="vhw">
                                <div className="programs-container-content-item">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Dtqio0iRunc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div> */}
                        </div>
                    </div>


                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content bg-success">
                                <div className="modal-header">
                                    <h5 className="modal-title text-white" id="exampleModalLabel">Coming Soon</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img src="images/Kids Logo_00445.png" className="w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
            <Footer />
        </div>
    );
};

export default Program;