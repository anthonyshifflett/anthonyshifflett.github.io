import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="hero">
                <h1>Anthony Shifflett</h1>
                <h2>Software Developer & Frontend Engineer</h2>
                <p>Building high-quality web experiences with modern technologies</p>
                <div className="hero-actions">
                    <Link to="/projects" className="primary-button">View My Work</Link>
                    <Link to="/contact" className="secondary-button">Get in Touch</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;