const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const db = require('./models');

//Routers
const groupRouter = require('./routes/Groups');
const chatRouter = require('./routes/Chats');
const userRouter = require('./routes/Users');
const groupUserRouter = require('./routes/GroupsUsers');

app.use('/groups', groupRouter);
app.use('/chats', chatRouter);
app.use('/users', userRouter);
app.use('/groupsUsers', groupUserRouter);

app.get('/', (req, res) => {
    res.send("Main page");
});


db.sequelize.sync().then(() => {
    app.listen(3001, ()=> {
        console.log("Server running on port 3001...");
    });
});
