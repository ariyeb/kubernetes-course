const express = require('express');
const redisClient = require('../db/redis');

const router = new express.Router();

router.post('/get-token', async (req, res) => {
    const token = 'aaa';
    const userId = req.body.id;
    try {
        await redisClient.setAsync(`token:${userId}`, token);
        res.send({ userId, token });
    } catch (err) {
        res.status(500).send({ error: "Could not save token" });
    }
});

router.post('/check-token', async (req, res) => {
    const token = req.body.token;
    const userId = req.body.id;
    try {
        const savedToken = await redisClient.getAsync(`token:${userId}`);
        if (token !== savedToken) return res.status(401).send({ error: "Unauthorized" });
        res.send()
    } catch (err) {
        res.status(500).send({ error: "Could not check token" });
    }
});

module.exports = router;
