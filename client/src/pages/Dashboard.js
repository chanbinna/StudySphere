import React from 'react';
import { NavBar } from '../components/NavBar';
import './Dashboard.css'
import { SlPencil } from "react-icons/sl";


export const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <div className='profile'>
                <h1>Hello (Username) 👋</h1>
                <div className='profileItem'>
                    <div className='profilePic'>
                        <img src="../ProfileDefault.png" alt="" />
                    </div>
                    <div className='profileText'>
                        <h3>
                            ID:<br />
                            Name:<br />
                            Email:<br />
                            Grade Level:<br />
                            Gender: <br />
                        </h3>
                    </div>
                </div>
                <div className='button-box'>
                    <button className='edit-button'><SlPencil /> &nbsp;EDIT</button>
                </div>



            </div>
            <div className='myGroup'>
                <h2>My Groups</h2>

            </div>
            <div className='stat'>

            </div>

            <div className='another-stat'>

            </div>

        </div>

    );
}