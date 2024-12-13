import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Navigation />
        </header>
    );
};

export default Header;