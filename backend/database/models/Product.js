const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    asin: String,
    id: String,
    full_link: String,
    image: Boolean,
    prices: Boolean,
    prime: String,
    reviews: String,
    sponsored: String,
    title: String,
});

module.exports = mongoose.model('Products', ProductSchema);