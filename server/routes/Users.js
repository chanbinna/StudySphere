const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

router.get('/', async (req, res) => {
    const userList = await Users.findAll();
    res.json(userList);
});

router.post('/', async (req, res) => {
    //const user = req.body;
    const { username, password, email } = req.body;
    bcrypt.hash(password, 10).then((hash)=>{
        Users.create({
            username: username,
            password: hash,
            email: email
        });
    })
    //await Users.create(user);
    res.json(username);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id);
    res.json(user);
});

router.post('/login', async (req, res) => {
    const {password, email} = req.body;
    const user = await Users.findOne({
        where: {email: email}
    });
    if (!user) res.json({error: "Wrong username or password"});
    bcrypt.compare(password, user.password).then((match)=>{
        if(!match) res.json({error: "Wrong username or password"});

        const accessToken = sign({email: user.email, id: user.id },"secret");
        res.json(accessToken);
    });
});

module.exports = router;