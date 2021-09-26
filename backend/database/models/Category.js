const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    amazon_domain : String,
    id: String,
    name: String,
    has_children: Boolean,
    is_root: Boolean,
    path: String,
    parent_id: String,
    parent_name: String,
    link: String,
    type: String
});

module.exports = mongoose.model('Categories',CategorySchema);