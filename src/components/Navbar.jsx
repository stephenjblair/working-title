import React from 'react';
import {Link} from 'react-router-dom';
import '../Navbar.css'


const Navbar = props => (
    <div className="component-container">
        <div className=" nav-container">
            <header className="navbar">
                <nav className="navbar-navigation">
                    <div className ="navbar-logo"><a href="/">working title</a></div>
                    <div className="navbar-nav-items">
                        <ul className ="navbar-links">
                            <Link to="/movies">Movies</Link>
                            <li><a href="/">Query</a></li>
                            <li><a href="/">Last Page</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    </div>

);

export default Navbar;