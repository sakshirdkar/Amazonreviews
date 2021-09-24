const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title : {
        type: String
    }
});

const list = mongoose.model('List',ListSchema);

module.exports = list;