const express = require('express');
const router = express.Router();
const Products = require('../database/models/Product');
const brokerAddress = require('../mapTopicToBroker');
const request = require('request');


router.get('/', async (req, res) => {
    const products = await Products.find();
    res.json(products);
});
const TopicIphone = "IPHONE";
const TopicMacBook = "MACBOOK";

function redirect(_url,_body){
    console.log(data);
    const options = {
        url: _url,
        json: true,
        body: _body
    };
    console.log("options", options)

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body);
    });
}



router.post('/', async (req, res) => {
    const body = req.body;
    const topicName =body.topicName;
    var products = body.results;
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
    else{
        redirect(brokerAddress(topicName),body);
    }
})

module.exports = router;