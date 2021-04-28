const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.get('/error', (req, res) => {
    res.send("<h1>500: Server crushed</h1>");
    process.exit(1);
});

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "..", "public", "index.html");
    res.sendFile(filePath);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server connected, port:", port));