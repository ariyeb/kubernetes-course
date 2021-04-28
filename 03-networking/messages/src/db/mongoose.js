const mongoose = require('mongoose');

const mongodbHost = process.env.MONGODB_SERVICE_SERVICE_HOST;
const mongodbPort = process.env.MONGODB_SERVICE_SERVICE_PORT;

const mongodbUrl = `mongodb://${mongodbHost}:${mongodbPort}/messages-db`;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});