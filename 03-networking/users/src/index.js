const express = require('express');
const cors = require('cors');

require('./db/mongoose');

const port = process.env.port || 8000;
const usersRouter = require('./routers/usersRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRouter);

app.use('/', (req, res) => {
    res.send("ok");
});

app.listen(port, () => console.log("Server connected, port:", port));