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
const IPhoneProducts = mongoose.model('IPhoneProducts', ProductSchema);
const MacBookProducts = mongoose.model('MacBookProducts', ProductSchema);
const MysteryBooksProducts = mongoose.model('MysteryBooksProducts', ProductSchema);

module.exports = {
    IPhoneProducts, MacBookProducts, MysteryBooksProducts
};
