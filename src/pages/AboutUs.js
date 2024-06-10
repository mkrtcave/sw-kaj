import React from "react";

import '../css/aboutus.css';
import LocMap from '../components/LocMap';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="aboutus-container">
                <h1 className="aboutus-title">About Our Agency</h1>
                <div className="aboutus-blocks">
                    <div className="aboutus-block">
                        <h2 className="aboutus-block-title">Experience You Can Trust</h2>
                        <p className="aboutus-block-text">
                            With over a decade of experience in the real estate industry, our agency has helped
                            countless clients achieve their real estate goals. We have a deep understanding of the local
                            market and trends, allowing us to provide valuable insights and guidance to our clients.
                        </p>
                    </div>
                    <div className="aboutus-block">
                        <h2 className="aboutus-block-title">Dedicated Professionals</h2>
                        <p className="aboutus-block-text">
                            Our team is comprised of dedicated professionals who are passionate about real estate. From
                            experienced agents to skilled negotiators, we have the expertise to handle all aspects of
                            your real estate transaction with professionalism and care.
                        </p>
                    </div>
                    <div className="aboutus-block">
                        <h2 className="aboutus-block-title">Personalized Service</h2>
                        <p className="aboutus-block-text">
                            At our agency, we believe in providing personalized service to each and every client. We
                            take the time to understand your unique needs and preferences, tailoring our approach to
                            ensure the best possible outcome for you.
                        </p>
                    </div>
                    <div className="aboutus-block">
                        <h2 className="aboutus-block-title">Comprehensive Services</h2>
                        <p className="aboutus-block-text">
                            Whether you're buying, selling, or renting a property, we offer a comprehensive range of
                            services to meet your needs. From property searches and market analysis to negotiations and
                            closing, we're here to support you every step of the way.
                        </p>
                    </div>
                    <div className="aboutus-block">
                        <h2 className="aboutus-block-title">Client Satisfaction</h2>
                        <p className="aboutus-block-text">
                            Customer satisfaction is our top priority. We measure our success by the satisfaction of our
                            clients, and we go above and beyond to ensure that each client receives the highest level of
                            service and attention.
                        </p>
                    </div>
                    <div className="aboutus-block">
                        <h2 className="aboutus-block-title">Get in Touch</h2>
                        <p className="aboutus-block-text">
                            Ready to make your real estate dreams a reality? Contact us today to learn more about how we
                            can help you achieve your goals. We look forward to working with you!
                        </p>
                    </div>
                </div>
            </div>
            <LocMap />
        </div>
    );
};

export default AboutUs;