const axios = require('axios');

const authAddress = `http://${process.env.AUTH_ADDRESS}/`;

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const id = req.body?.userId || req.query.userId;

    try {
        const { status } = await axios.post(authAddress + "check-token", { token, id });
        if (status !== 200) return res.status(401).send({ error: "Unauthorized" });
        next();
    } catch (err) {
        return res.status(401).send({ error: "Unauthorized" });
    }
};

module.exports = auth;