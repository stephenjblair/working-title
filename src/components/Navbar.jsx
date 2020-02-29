import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../images/viastream.png"




const Navbar = props => (
        <div className=" nav-container">
            <header className="navbar">
                <nav className="navbar-navigation">
                    <div className ="navbar-logo"><img id="via-image" src={logo} alt="logo"/></div>
                    <div className="navbar-nav-items">
                        <ul className ="navbar-links">
                            <Link to="/movies">Movies</Link>
                            <Link to="/series">Series</Link>
                            <li><a href="/">Subscriptions</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
 

);

export default Navbar;