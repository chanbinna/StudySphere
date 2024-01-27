const express = require('express');
const router = express.Router();
const { Chats } = require('../models');

router.get('/', async (req, res) => {
    const chatList = await Chats.findAll();
    res.json(chatList);
});

router.post('/', async (req, res) => {
    const chat = req.body;
    await Chats.create(chat);
    res.json(chat);
});

router.get('/:groupId', async (req, res) => {
    const id = req.params.groupId;
    const chatList = await Chats.findAll({
        where: {GroupId: id}
    });
    res.json(chatList);
});

module.exports = router;