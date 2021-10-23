const express = require('express');
const request = require('request');
const fetchDataFromAPI = require('./fetchDataFromAPI');


const app = express();
app.use(express.json());


const TopicIphone = "IPHONE";
const TopicMacBook = "MACBOOK";
const TopicMysteryBooks = "MYSTERY BOOKS";
//Topics 1,2,3


fetchDataFromAPI(TopicIphone).then(data => {
    var model ={
            "topicName": TopicIphone,
            "results": data
        }
    publish(model)
});

fetchDataFromAPI(TopicMysteryBooks).then(data => {
    var model ={
            "topicName": TopicMysteryBooks,
            "results": data
        }
    publish(model)
});

fetchDataFromAPI(TopicMacBook).then(data => {
    var model ={
            "topicName": TopicMacBook,
            "results": data
        }
    publish(model)
});

function publish(data) {

    const options = {
        url: 'http://server:8080/products/',
        json: true,
        body: data
    };
    console.log("options",options)

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