const axios = require('axios');

const authAddress = `http://${process.env.AUTH_ADDRESS}/`;

const getToken = async (id) => {
    try {
        const { data } = await axios.post(authAddress + "get-token", { id });
        return data.token;
    } catch (err) {
        throw err;
    }
};

module.exports = getToken;
