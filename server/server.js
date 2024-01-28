const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io')
const cors = require('cors');
const db = require('./models');

app.use(cors());
app.use(express.json());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        // methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
    });
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});

const setupServer = async () => {
    // Set up routes
    const groupRouter = require('./routes/Groups');
    const chatRouter = require('./routes/Chats');
    const userRouter = require('./routes/Users');
    app.use('/groups', groupRouter);
    app.use('/chats', chatRouter);
    app.use('/users', userRouter);

    // Define default route
    app.get('/', (req, res) => {
        res.send("Main page");
    });

    // Synchronize Sequelize models with the database
    try {
        await db.sequelize.sync();
        // Start the server
        server.listen(3001, () => {
            console.log("Server running on port 3001...");
        });
    } catch (error) {
        console.error("Error synchronizing Sequelize models:", error);
    }
};

setupServer();
