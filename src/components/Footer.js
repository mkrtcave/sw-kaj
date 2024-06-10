import React from "react";
import { Link } from 'react-router-dom';

import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";


const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 Main Street, Anytown, USA</p>
                    <p>Email: info@realestate.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/our-features">Our features</Link></li>
                        <li><Link to="/on-sale">On Sale</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>About Our Company</h3>
                    <p>We are dedicated to helping you find the perfect home. With years of experience and a commitment to customer satisfaction, we are your trusted partner in real estate.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Real Estate Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;