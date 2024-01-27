const express = require('express');
const app = express();

app.use(express.json());
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
