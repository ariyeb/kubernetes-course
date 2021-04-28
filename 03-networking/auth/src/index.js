const express = require('express');
const cors = require('cors');

const port = process.env.port || 4000;
const authRouter = require('./routers/authRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRouter);

app.use('/', (req, res) => {
    res.send("ok");
});

app.listen(port, () => console.log("Server connected, port:", port));