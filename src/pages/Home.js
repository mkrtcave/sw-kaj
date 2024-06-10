import React from 'react';

import house from "../assets/images/house.svg";
import MediaPlayer from '../components/MediaPlayer';

const Home = () => {
    return (
        <div>
        <section className="section">
            <div className="wrapper">
                <div className="homesec-content">
                    <div className="homesec-content-info">
                        <h2 className = "homesec-content-info-title">Find your best house!</h2>
                        <span className = "homesec-content-info-text">
                            Discover a diverse range of properties meticulously curated to suit
                            your unique preferences and lifestyle needs. Whether you're searching
                            for a cozy apartment in the heart of the city, a spacious family home
                            nestled in serene suburbs, or an elegant estate boasting breathtaking views,
                            we have the perfect home waiting just for you.Explore our comprehensive listings,
                            each meticulously crafted to offer detailed insights into every property.
                        </span>
                        <form className="homesec-content-info-form" id="email">
                            <input type="email" autoFocus placeholder="Your email.." size="30"/>
                            <button type="submit">Get started</button>
                        </form>
                    </div>
                    <figure className="homesec-content-image">
                        <img src={house} alt={"House picture"} />
                    </figure>
                </div>
            </div>
        </section>
            <section className="section-video">
                <div className="video-content">
                    <h1 className="video-content-title">Explore Our Luxury Real Estate</h1>
                </div>
                <MediaPlayer src="https://videos.pexels.com/video-files/4770380/4770380-hd_1280_720_30fps.mp4" type="video" />
            </section>
        </div>
    );
};


export default Home;