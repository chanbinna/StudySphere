import React from 'react';
import Logo from '../Logo1.svg';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={Logo} alt="" />

            <a className='login' href="login">Log in</a>
        </div>

    );
}