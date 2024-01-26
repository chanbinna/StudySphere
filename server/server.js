const express = require('express');
const app = express();

app.use(express.json());

const db = require('./models');

//Routers
const groupRouter = require('./routes/Groups');

app.use('/groups', groupRouter);

app.get('/', (req, res) => {
    res.send("Hello World");
})


db.sequelize.sync().then(() => {
    app.listen(3001, ()=> {
        console.log("Server running on port 3001...");
    });
});
