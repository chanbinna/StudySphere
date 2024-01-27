import React from 'react';
import { NavBar } from '../components/NavBar';
import './Dashboard.css'
import { SlPencil } from "react-icons/sl";
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme
} from 'victory';


export const Dashboard = () => {
    const data = [
        { weekday: 1, hours: 6 },
        { weekday: 2, hours: 2 },
        { weekday: 3, hours: 5 },
        { weekday: 4, hours: 3 },
        { weekday: 5, hours: 7 },
        { weekday: 6, hours: 4 },
        { weekday: 7, hours: 1 },

    ];

    return (
        <div>
            <div className='navBar'>
                <NavBar />

            </div>
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
                <h2>Study Statistics</h2>
                <VictoryChart
                    width={380} // Set the desired width
                    height={200}
                    // adding the material theme provided with Victory
                    theme={VictoryTheme.material}
                    domainPadding={0}
                    padding={{ top: 30, bottom: 60, left: 45, right: 50 }}
                >
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5, 6, 7]}
                        tickFormat={["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]}
                        style={{
                            tickLabels: { fontSize: 7 }, // Adjust tick label font size
                            axisLabel: { fontSize: 12 }   // Adjust axis label font size if you have one
                        }}
                    />
                    <VictoryAxis
                        // padding={{ top: 20, bottom: 60 }}
                        padding={{ top: 10, bottom: 60 }}
                        offsetX={20}
                        style={{
                            tickLabels: { fontSize: 7 }, // Adjust tick label font size
                            axisLabel: { fontSize: 12 }   // Adjust axis label font size if you have one
                        }}


                        dependentAxis
                        tickFormat={(x) => (`${x}H`)}
                    />
                    <VictoryBar
                        height={400}
                        barWidth={35}
                        barRatio={1}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}

                        data={data}
                        x="weekday"
                        y="hours"
                        style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 1.5 } }}
                    />
                </VictoryChart>
            </div>

        </div>

    );
}