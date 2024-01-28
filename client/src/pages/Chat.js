import React from 'react';
import { NavBar } from '../components/NavBar';
// import socket from '../socket';
// import socket from '../utils/socket';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001");

export const Chat = () => {
    //room States
    const [room, setRoom] = React.useState("");

    //message States
    const [message, setMessage] = React.useState("");
    const [messageRecevied, setMessageReceived] = React.useState("");
    
    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
    };
    
    const sendMessage = () => {
        socket.emit("send_message", {message, room});
    };
    React.useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
        });
    }, [socket]);
    return (
        <div>
            <NavBar />
            <input placeholder='Room Number' onChange={(event) => {
                setRoom(event.target.value);
            }}/>
            <button onClick={joinRoom}>Join Room</button>
            <input placeholder='Message...' onChange={(event) => {
                setMessage(event.target.value);
            }}/>
            <button onClick={sendMessage}>Send Message</button>
            <h1>Message: </h1>
            {messageRecevied}
        </div>
    );
}


