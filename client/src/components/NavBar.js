import React from 'react';
import Logo from '../Logo1.svg';
import './NavBar.css';
import { SlHome } from "react-icons/sl";
import { SlCompass } from "react-icons/sl";
import { SlBubbles } from "react-icons/sl";

export const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={Logo} alt="" />

            <div className='buttons'>
                <button className='logout-button'>LOGOUT</button>

                <a href="/dashboard"><SlHome /></a>
                <a href="/findgroup"><SlCompass /></a>
                <a href="/chat"><SlBubbles /></a>
            </div>
        </div>

    );
}