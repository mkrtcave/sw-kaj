import React from "react";
import { Link } from 'react-router-dom';
import Logo from './Logo';


const Header = () => {
    return(
        <header className="header">
            <Logo/>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/on-sale">On Sale</Link>
                    </li>
                </ul>
            </nav>
            <nav role="navigation-burger" className="navigation-burger">
                <div id="menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/on-sale">On Sale</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;