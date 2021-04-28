const express = require('express');
const getToken = require('../auth/auth');
const User = require('../models/userModel');

const router = new express.Router();

router.post('/subscribe', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await getToken(user._id);
        console.log(user);
        res.send({ user, token });
    } catch (err) {
        res.status(500).send({ error: "Problem in connection" });
    }
});

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({ email, password });
        console.log(user);
        const token = await getToken(user._id);
        res.send({ user, token });
    } catch (err) {
        res.status(500).send({ error: "Problem in connection" });
    }
});

module.exports = router;