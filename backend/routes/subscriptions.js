const express = require('express');
const Subscription = require('../database/models/Subscription');
const router = express.Router();
const Product = require('../database/models/Product');

router.get('/', async (req, res) => {
    const subscriptions = await Subscription.find();
    var username = req.query.username;
    topics = []
    subscriptions.forEach(element => {
        if(username == element.username && !topics.includes(element.topic) ){
            topics.push(element.topic)
        }
    });
    topics.forEach(topic => {
        const products = Product.find();
        console.log(products);
    });
    console.log("topics", topics);

    // res.json(products);
});

router.post('/', async (req, res) => {
    console.log("inside subscribe post method")
    console.log(req)
    const subscription = new Subscription({
        username: req.body.username,
        topic: req.body.topic
    })
    if(!Subscription.findOne({username: req.body.username,topic : req.body.topic})){
        subscription.save();
    }
})

module.exports = router;