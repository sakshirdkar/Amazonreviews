const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    content: String,
});

module.exports = mongoose.model('Messages',MessageSchema);