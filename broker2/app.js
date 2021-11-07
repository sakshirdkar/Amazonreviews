const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const app = express();
const cors = require('cors');
const Products = require('./database/models/Product');
const brokerAddress = require('./mapTopicToBroker');
const Subscription = require('./database/models/Subscription');


app.use(express.json());
app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
  }));
app.use(express.urlencoded({ extended: false }));

const TopicMysteryBooks = "MYSTERY BOOKS";
const TopicRomanticNovels = "ROMANTIC NOVELS";
// const TopicMoisturiser= "MOISTURISER";
// const TopicShampoo = "SHAMPOO";

function redirect(_url, _body) {
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



app.post('/products/', async (req, res) => {
    const body = req.body;
    const topicName = body.topicName;
    var products = body.results;
    if (topicName == TopicMysteryBooks) {
        products.forEach(productFromAPI => {
            console.log(productFromAPI);
            const product = new Products.MysteryBook({
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

    else if (topicName == TopicRomanticNovels) {
        products.forEach(productFromAPI => {
            const product = new Products.RomanticNovel({
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
    else {
        redirect(brokerAddress(topicName), body);
    }
})


app.get('/subscribe/', async (req, res) => {
    const subscriptions = await Subscription.find();
    var username = req.query.username;
    topics = []
    subscriptions.forEach(element => {
        if (username == element.username) {
            topics.push(element.topic)
        }
    });
    var MysteryBooks = {}
    var RomanticNovels = {}
    var result = {
        'MysteryBooks' : MysteryBooks,
        'RomanticNovels' : RomanticNovels
    }

    if(topics.includes('MysteryBooks')){
        result.MysteryBooks = await Products.MysteryBook.find()
    }
    if(topics.includes('RomanticNovels')){
        result.RomanticNovels = await Products.RomanticNovel.find()
    }

    console.log("topics", topics);

    res.json(result);
});

// Connect to MongoDB
mongoose
    .connect(
        'mongodb://mongo:27017/AmazonProducts',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const port = 8081;

app.listen(port, () => console.log('Server running... on port 8081'));