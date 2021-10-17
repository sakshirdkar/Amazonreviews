const express = require('express');
const router = express.Router();
const Products = require('../database/models/Product');

router.get('/', async (req, res) => {
    const products = await Products.find();
    res.json(products);
});

router.post('/', async (req, res) => {
    req.body.forEach(productFromAPI => {
        const product = new Products({
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
    })

    product.save();
})

module.exports = router;