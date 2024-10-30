import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
                <a href="/#">Kane Esasta</a>
            <ul>

                <li><Link to="/aboutMe">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </header>
    );
}

export default NavBar;