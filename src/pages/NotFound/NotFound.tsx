import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => (
    <div className="not-found">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/" className="home-link">
            Return Home
        </Link>
    </div>
);

export default NotFound;