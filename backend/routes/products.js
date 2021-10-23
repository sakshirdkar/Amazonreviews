const express = require('express');
const router = express.Router();
const Products = require('../database/models/Product');

router.get('/', async (req, res) => {
    const products = await Products.find();
    res.json(products);
});
const TopicIphone = "IPHONE";
const TopicMacBook = "MACBOOK";
const TopicMysteryBooks = "MYSTERY BOOKS";

router.post('/', async (req, res) => {
    const topicName = req.body.topicName;
    var products =  req.body.results;
    if (topicName == TopicIphone) {
        products.forEach(productFromAPI => {
            console.log(productFromAPI);
            const product = new Products.IPhoneProducts({
                topicName: topicName,
                asin: productFromAPI.asin,
                id: productFromAPI.id,
                full_link: productFromAPI.full_link,
                image: productFromAPI.image,
                prices: productFromAPI.prices,
                prime: productFromAPI.prime,
                reviews: productFromAPI.reviews,
                sponsored: productFromAPI.sponsored,
                title: productFromAPI.title,
            });

            product.save();
        })

    }

    else if (topicName == TopicMacBook) {
        products.forEach(productFromAPI => {
            const product = new Products.MacBookProducts({
                topicName: topicName,
                asin: productFromAPI.asin,
                id: productFromAPI.id,
                full_link: productFromAPI.full_link,
                image: productFromAPI.image,
                prices: productFromAPI.prices,
                prime: productFromAPI.prime,
                reviews: productFromAPI.reviews,
                sponsored: productFromAPI.sponsored,
                title: productFromAPI.title,
            });
            product.save();
        })

    }
    else if (topicName == TopicMysteryBooks) {
        products.forEach(productFromAPI => {
            const product = new Products.MysteryBooksProducts({
                topicName: topicName,
                asin: productFromAPI.asin,
                id: productFromAPI.id,
                full_link: productFromAPI.full_link,
                image: productFromAPI.image,
                prices: productFromAPI.prices,
                prime: productFromAPI.prime,
                reviews: productFromAPI.reviews,
                sponsored: productFromAPI.sponsored,
                title: productFromAPI.title,
            });
            product.save();
        })

    }
})

module.exports = router;