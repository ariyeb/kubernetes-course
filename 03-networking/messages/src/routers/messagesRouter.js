const express = require('express');
const auth = require('../middleware/auth');
const Message = require('../models/messageModel');

const router = new express.Router();

router.post('/add-message', auth, async (req, res) => {
    const message = new Message(req.body.message);
    try {
        await message.save();
        res.send(message);
    } catch (err) {
        res.status(500).send({ error: "Server connection problem" });
    }
});

router.get('/messages', auth, async (req, res) => {
    const userId = req.query.userId;
    try {
        const messages = await Message.find({ user: userId });
        if (!messages) return res.send({ messages: [] });
        res.send(messages);
    } catch (err) {
        res.status(500).send({ error: "Server connection problem" });
    }
});

module.exports = router;