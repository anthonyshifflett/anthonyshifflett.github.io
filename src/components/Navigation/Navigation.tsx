import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isMenuOpen) return;

            if (e.key === 'Escape') {
                closeMenu();
                hamburgerRef.current?.focus();
                return;
            }

            // Focus trap inside mobile menu
            if (e.key === 'Tab' && menuRef.current) {
                const focusableElements = menuRef.current.querySelectorAll<HTMLElement>('a');
                const firstEl = focusableElements[0];
                const lastEl = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl.focus();
                } else if (!e.shiftKey && document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen, closeMenu]);

    const ariaExpandedProp = { "aria-expanded": isMenuOpen };

    return (
        <nav className="main-nav" aria-label="Main navigation">
            <div className="nav-container">
                <div className="nav-brand">
                    <NavLink to="/" onClick={closeMenu}>Anthony Shifflett</NavLink>
                </div>

                <button
                    ref={hamburgerRef}
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    {...ariaExpandedProp}
                    aria-controls="nav-menu"
                >
                    <span className="hamburger-line" aria-hidden="true"></span>
                    <span className="hamburger-line" aria-hidden="true"></span>
                    <span className="hamburger-line" aria-hidden="true"></span>
                </button>

                <ul
                    ref={menuRef}
                    id="nav-menu"
                    className={`nav-links ${isMenuOpen ? 'active' : ''}`}
                >
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