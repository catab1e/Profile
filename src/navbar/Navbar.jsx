import React from 'react';
import logo from './img/logo.png'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'><img src={logo} alt="logo" /></div>
            <div className='navbar__menu'>
                <span>About Me</span>
                <span>My Works</span>
                <span>Contacts</span>
                <span>Some</span>
            </div>
        </div>
    );
};

export default Navbar;