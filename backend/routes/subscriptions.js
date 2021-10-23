const express = require('express');
const Subscription = require('../database/models/Subscription');
const router = express.Router();
const ProductModel = require('../database/models/Product');

router.get('/', async (req, res) => {
    const subscriptions = await Subscription.find();
    var username = req.query.username;
    topics = []
    subscriptions.forEach(element => {
        if (username == element.username) {
            topics.push(element.topic)
        }
    });
    var IPhoneProducts = {}
    var MacBookProducts = {}
    var MysteryBooksProducts = {}
    var result = {
        'IPhoneProducts' : IPhoneProducts,
        'MacBookProducts' : MacBookProducts,
        'MysteryBooksProducts' : MysteryBooksProducts
    }
    if(topics.includes('IPhoneProducts')){
        result.IPhoneProducts = await ProductModel.IPhoneProducts.find()
    }
    if(topics.includes('MacBookProducts')){
        result.MacBookProducts = await ProductModel.MacBookProducts.find()
    }
    if(topics.includes('MysteryBooksProducts')){
        result.MysteryBooksProducts = await ProductModel.MysteryBooksProducts.find()
    }

    console.log("topics", topics);

    res.json(result);
});

router.post('/', async (req, res) => {
    console.log("inside subscribe post method")
    const new_subscription = new Subscription({
        username: req.body.username,
        topic: req.body.topic
    })
    Subscription.findOne({ username: new_subscription.username, topic: new_subscription.topic }, function (err, subscription) {
        if (subscription) { 
            console.log("subscription already exists") 
        } else 
        { 
            new_subscription.save();
        }
    })

});
module.exports = router;