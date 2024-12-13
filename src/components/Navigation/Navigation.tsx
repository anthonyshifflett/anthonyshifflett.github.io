import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-brand">
                    <NavLink to="/" onClick={closeMenu}>Anthony Shifflett</NavLink>
                </div>

                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
                    <li><NavLink to="/resume" onClick={closeMenu}>Resume</NavLink></li>
                    <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;