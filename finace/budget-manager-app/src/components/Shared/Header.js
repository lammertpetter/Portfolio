import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <Link to="/" className="logo">Budget Manager</Link>
            <nav>
                <ul className={menuOpen ? 'active' : ''}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/personal">Personal Finance</Link></li>
                    <li><Link to="/business">Business Finance</Link></li>
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;