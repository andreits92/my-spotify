import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const onSignoutHandler = () => {
    localStorage.removeItem('token');
    window.location = '/login';
}

const Header = () => {
    return (
        <header className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <button className="btn btn-default" onClick={onSignoutHandler}>Sign out</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;