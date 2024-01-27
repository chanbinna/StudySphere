const express = require('express');
const router = express.Router();
const {Groups} = require('../models');

router.get('/', async (req, res) => {
    const groupList = await Groups.findAll();
    res.json(groupList);
});

router.post('/', async (req, res) => {
    const group = req.body;
    await Groups.create(group);
    res.json(group);
});

router.get('/byID/:id', async (req, res) => {
    const group = await Groups.findByPk(req.params.id);
    res.json(group);
});

module.exports = router;