import React from 'react';
import './Header.css';
import logo from '../../images/A.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img className='logo' src={logo} alt="" />
            <h4 className='text'>84Shopping-Center</h4>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;