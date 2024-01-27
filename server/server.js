const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io')
const cors = require('cors');
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET","POST"]
    }
});
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`); // testing server connection
    socket.on("send_message", (data) => {
        // console.log(data);
        socket.broadcast.emit("receive_message", data)
    })
});

const db = require('./models');

//Routers
const groupRouter = require('./routes/Groups');
const chatRouter = require('./routes/Chats');
const userRouter = require('./routes/Users');

app.use('/groups', groupRouter);
app.use('/chats', chatRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send("Main page");
});

db.sequelize.sync().then(() => {
    app.listen(3001, ()=> {
        console.log("Server running on port 3001...");
    });
});
