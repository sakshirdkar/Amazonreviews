const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    topic: String,
    asin: String,
    id: String,
    full_link: String,
    image: [],
    prices: [],
    prime: String,
    reviews: [],
    sponsored: String,
    title: String,
});

const Moisturizer = mongoose.model('Moisturizers', ProductSchema);
const Shampoo = mongoose.model('Shampoos', ProductSchema);

module.exports = {
    Moisturizer, Shampoo
};
