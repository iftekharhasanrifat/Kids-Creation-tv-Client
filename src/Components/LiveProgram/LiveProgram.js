import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const LiveProgram = () => {
    return (
        <>
            <div className="bg-warning">
                <Navbar />
                <main style={{ height: '72.76vh' }} id="live" className="mt-5">
                    <div className="cont">
                        <section>
                            <section className="mb-5">
                                <div id="video-container">
                                    <div className="live mt-5">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/y2Zq2P4uOhs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <div className="row">
                                            <div className="col-3"></div>
                                            <div className="col-6">
                                                <div id="player">

                                                </div>
                                            </div>
                                            <div className="col-3"></div>
                                        </div>
                                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                                        <script type="text/javascript"
                                            src="http://jwpsrv.com/library/4iOhxm4QEeS_pg6sC0aurw.js"></script>
                                        <script type="text/javascript" src="http://technohaat.com/tv/kidscreation/live.js"></script>
                                    </div>
                                </div>
                            </section>
                        </section>


                        {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
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
                    </div> */}
                    </div>
                </main>
                <Footer />
            </div>
            
        </>
    );
};

export default LiveProgram;