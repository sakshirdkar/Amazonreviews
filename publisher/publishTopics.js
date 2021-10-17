const TopicIphone12 = require('./TopicIphone12');
const TopicMacBookPro = require('./TopicMacBookPro');
const TopicMysteryBooks = require('./TopicMysteryBooks');

const express = require('express');
const app = express();
app.use(express.json());
//const Iphone12 = TopicIphone12();
//const MacBookPro = TopicMacBookPro();
//const MysteryBooks = TopicMysteryBooks();

const request = require('request');
publish(TopicIphone12);

function publish(topic) {
    //console.log("vvvvvv", topic());
    const options = {
        url: 'http://127.0.0.1:8080',
        json: true,
        body: topic()
    };

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
    });
}

const port = 3001;

app.listen(port, () => console.log('Server running... on port 3000'));
module.exports = publish;