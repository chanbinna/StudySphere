import Logo from '../Logo1.svg';
import Logo2 from '../Logo2.svg';
import React, { useEffect } from 'react';
import './Login.css';
import { SlArrowLeft } from "react-icons/sl";
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios';




const responseOutput = (response) => {
    console.log(response);
};
const errorOutput = (error) => {
    console.log(error);
};




export const Login = () => {

    return (
        <div>
            <div className='navbar'>
                <img className='logo' src={Logo} alt="" />

                <a className='button' href="/"> <SlArrowLeft /> &nbsp; Back to main page</a>
            </div>
            <div className='loginBox'>
                <img className='biglogo' src={Logo2} alt="" />
                <h2>Welcome to STUDYSPHERE!</h2>
                <div className='logbutton'>
                    <GoogleLogin onSuccess={responseOutput} onError={errorOutput} />
                </div>
            </div>
        </div>


    );
}