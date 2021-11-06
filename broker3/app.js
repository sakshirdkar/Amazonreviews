const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const app = express();
const cors = require('cors');
const Products = require('./database/models/Product');
const brokerAddress = require('./mapTopicToBroker');



app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


const TopicMoisturiser = "MOISTURISER";
const TopicShampoo = "SHAMPOO";

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



app.post('/', async (req, res) => {
    const body = req.body;
    const topicName = body.topicName;
    var products = body.results;
    if (topicName == TopicMoisturiser) {
        products.forEach(productFromAPI => {
            console.log(productFromAPI);
            const product = new Products.Moisturizer({
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

    else if (topicName == TopicShampoo) {
        products.forEach(productFromAPI => {
            const product = new Products.Shampoo({
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

// Connect to MongoDB
mongoose
    .connect(
        'mongodb://mongo:27017/AmazonProducts',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const port = 8082;

app.listen(port, () => console.log('Server running... on port 8082'));