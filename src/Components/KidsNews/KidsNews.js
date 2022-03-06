import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const KidsNews = () => {

    const PF = "http://localhost:5000/images/";
    const [kidsNews, setKidsNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/kidsNews?new=true")
            .then(res => res.json())
            .then(data => {
                setLatestNews(data);
                console.log(data);
            })

        fetch("http://localhost:5000/api/kidsNews")
            .then(res => res.json())
            .then(data => {
                setKidsNews(data);
                console.log(data);
            })


    }, [])
    const moreNews = kidsNews.filter(function (objFromA) {
        return !latestNews.find(function (objFromB) {
            return objFromA._id === objFromB._id
        })
    })
    console.log(moreNews.length);



    return (
        <div className="bg-warning">
            <Navbar />
            <main id="programs" class="mt-5">
                <div class="cont">
                    <div class="news">
                        <Link to={`/kidsNews/${latestNews[0]?._id}`} class="main-news">
                            <img src={PF + latestNews[0]?.photo} alt="top-news" />
                            <p class="news-title">
                                {latestNews[0]?.title}
                            </p>
                        </Link>

                        <div class="latest-news">
                            <h2>তাজা খবর</h2>
                            {latestNews.map(singleLatestNews => <Link to={`/kidsNews/${singleLatestNews._id}`} class="latest-news-item">

                                <div class="img-box">
                                    <img src={PF + singleLatestNews.photo} alt="news" />
                                </div>
                                <p class="title">{singleLatestNews.title}</p>

                            </Link>
                            )}

                        </div>
                    </div>
                </div>

                <div class="cont">
                    <div class="others-news">
                        <h2>আরও খবর</h2>
                        <div class="others-news-box">
                            {moreNews.length < 1 ? kidsNews.map(singleNews => <Link to={`/kidsNews/${singleNews._id}`} class="others-news-box-item">
                                <div class="img-box">
                                    <img src={PF + singleNews.photo} alt="news" />
                                </div>
                                <p class="title">{singleNews.title}</p>
                            </Link>) :
                                moreNews.map(singleNews => <Link to={`/kidsNews/${singleNews._id}`} class="others-news-box-item">
                                    <div class="img-box">
                                        <img src={PF + singleNews.photo} alt="news" />
                                    </div>
                                    <p class="title">{singleNews.title}</p>
                                </Link>)
                            }

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default KidsNews;