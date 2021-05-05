const express = require('express');
const cors = require('cors');

const port = process.env.PORT;
require('./db/mongoose');
const messagesRouter = require('./routers/messageRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(messagesRouter);

app.listen(port, () => console.log("Server connectes, port:", port));