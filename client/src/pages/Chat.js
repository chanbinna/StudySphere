import React from 'react';
import { NavBar } from '../components/NavBar';
// import socket from '../utils/socket';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001")

export const Chat = () => {
    const sendMessage = () => {
        socket.emit("send_message", {message: "Hello"});
    };
    React.useEffect(() => {
        socket.on("receive_message", (data) => {
            alert(data.message);
        });
    }, [socket]);
    return (
        <div>
            <NavBar />
            <input placeholder='Message...'/>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
}