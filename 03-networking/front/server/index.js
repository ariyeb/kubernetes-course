const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const usersAddress = process.env.USERS_ADDRESS;
const messagesAddress = process.env.MESSAGES_ADDRESS;

const app = express();

app.use("/users", createProxyMiddleware({
    target: usersAddress,
    changeOrigin: true,
    pathRewrite: {
        '^/users': ""
    }
}));

app.use("/messages", createProxyMiddleware({
    target: messagesAddress,
    changeOrigin: true,
    pathRewrite: {
        '^/messages': ""
    }
}));


app.use(express.static(path.join(__dirname, "..", 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, "..", 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server connected, port:", port));