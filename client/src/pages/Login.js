import Logo from '../Logo1.svg';
import Logo2 from '../Logo2.svg';
import './Login.css';
import { SlArrowLeft } from "react-icons/sl";
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';



const responseOutput = (response) => {
    console.log(response);
};
const errorOutput = (error) => {
    console.log(error);
};




// export const Login = () => {

//     return (
//         <div>
//             <div className='navbar'>
//                 <a href='/'><img className='logo' src={Logo} alt="" /></a>

//                 <a className='button' href="/"> <SlArrowLeft /> &nbsp; Back to main page</a>
//             </div>
//             <div className='loginBox'>
//                 <img className='biglogo' src={Logo2} alt="" />
//                 <h2>Welcome to STUDYSPHERE!</h2>
//                 <div className='logbutton'>
//                     <GoogleLogin onSuccess={responseOutput} onError={errorOutput} />
//                 </div>
//             </div>
//         </div>


//     );
// }

export const Login = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            navigate('/dashboard');
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        sendToServer(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const sendToServer = (userInfo) => {
        const userData = {
            name: userInfo.name,
            email: userInfo.email
        };

        axios.post('http://localhost:3001/users', userData)
            .then(response => {
                console.log('User info sent to server:', response.data);
            })
            .catch(error => {
                console.error('Error sending user info:', error);
            });
    };

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div>
            <div className='navbar'>
                <a href='/'><img className='logo' src={Logo} alt="" /></a>

                <a className='button' href="/"> <SlArrowLeft /> &nbsp; Back to main page</a>
            </div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <div className='loginBox'>
                    <img className='biglogo' src={Logo2} alt="" />
                    <h2>Welcome to STUDYSPHERE!</h2>
                    <div className='logbutton'>
                        <button onClick={() => login()}>Sign in with Google 🚀 </button>
                    </div>
                </div>
            )}
        </div>
    );
}