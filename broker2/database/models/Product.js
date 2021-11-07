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

const MysteryBook = mongoose.model('MysteryBooksProducts', ProductSchema);
const RomanticNovel = mongoose.model('RomanticNovels', ProductSchema);

module.exports = {
    MysteryBook, RomanticNovel
};
