//const TopicIphone12 = require('./TopicIphone12');
//const TopicMacBookPro = require('./TopicMacBookPro');
//const TopicMysteryBooks = require('./TopicMysteryBooks');

const express = require('express');
const request = require('request');
const fetchDataFromAPI = require('./fetchDataFromAPI');


const app = express();
app.use(express.json());


const TopicIphone = "IPHONE";
const TopicMacBook = "MACBOOK";
const TopicMysteryBooks = "MYSTERY BOOKS";
//Topics 1,2,3

// publish(fetchDataFromAPI(TopicIphone))
// publish(fetchDataFromAPI(TopicMacBook))
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
// fetchDataFromAPI(TopicMacBook).then(data => publish(data));
// fetchDataFromAPI(TopicMysteryBooks).then(data => publish(data));
//const MysteryandSuspenseBooks = fetchDataFromAPI('Mystery and suspense books ');
//const MacBook = fetchDataFromAPI('MacBook');


//publish(MysteryandSuspenseBooks)



function publish(data) {

    const options = {
        url: 'http://127.0.0.1:8080/products/',
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