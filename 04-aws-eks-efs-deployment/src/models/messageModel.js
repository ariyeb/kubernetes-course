const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;