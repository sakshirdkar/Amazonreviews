const express = require('express');
const request = require('request');
const mapTopicToBroker = require('./mapTopicToBroker');
const fetchDataFromAPI = require('./fetchDataFromAPI');


const app = express();
app.use(express.json());

// const Topics = ["IPHONE", "MACBOOK", "MYSTERY BOOKS", "ROMANTIC NOVELS", "MOISTURISER", "SHAMPOO"];
const Topics = ["SHAMPOO"];
const totalTopics = Topics.length;


let i = 0;
while (i < totalTopics) {

    fetchDataFromAPI(Topics[i]).then(data => {
        //console.log(data);
        console.log(Topics[i]);
        var model = {
            "topicName": Topics[i],
            "results": data
        }
        const url = mapTopicToBroker(Topics[i++]);
        publish(model, url);
    });
}


function publish(data, URL) {

    const options = {
        url: URL,
        json: true,
        body: data
    };
    console.log("options", options)

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body);
    });
}

const port = 3001;

app.listen(port, () => console.log('Server running... on port 3001'));
module.exports = publish;