import React from 'react';
import '../Navbar.css';

const Navbar = props => (
    <header className="navbar">
        <nav className="navbar-navigation">
            <div></div>
            <div className ="navbar-logo"><a href="/">THE LOGO</a></div>
            <div className="navbar-nav-items">
                <ul>
                    <li><a href="/">Results</a></li>
                    <li><a href="/">Query</a></li>
                    <li><a href="/">Last Page</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;