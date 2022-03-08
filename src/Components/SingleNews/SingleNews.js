import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const SingleNews = () => {
    const { newsId } = useParams();
    const PF = "http://localhost:5000/images/";

    const [kidsNews, setKidsNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [singleKidNews, setSingleKidNews] = useState({});

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

        fetch(`http://localhost:5000/api/kidsNews/${newsId}`)
            .then(res => res.json())
            .then(data => {
                setSingleKidNews(data);
                console.log(data);
            })
    }, [newsId])

    const moreNews = kidsNews.filter(function (objFromA) {
        return !latestNews.find(function (objFromB) {
            return objFromA._id === objFromB._id
        })
    })
    return (
        <div className="bg-warning">
            <Navbar />
            <main id="programs" className="mt-5">
                <div className="cont">
                    <div className="news">

                        <img className="main-news" src={PF + singleKidNews.photo} alt="top-news" />

                        <div className="latest-news">
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

                <div className="cont">
                    <p className="news-title" style={{ marginTop: '2vh', fontSize: '1.5rem' }}>
                        {singleKidNews.title}
                    </p>
                    <p>
                        {singleKidNews.desc}
                    </p>
                </div>

                <div className="cont">
                    <div className="others-news">
                        <h2>আরও খবর</h2>
                        <div className="others-news-box">
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

export default SingleNews;