//const TopicIphone12 = require('./TopicIphone12');
//const TopicMacBookPro = require('./TopicMacBookPro');
//const TopicMysteryBooks = require('./TopicMysteryBooks');



const request = require('request');
const express = require('express');
const fetchDataFromAPI = require('./fetchDataFromAPI');


const app = express();
app.use(express.json());


const TopicIphone = "IPHONE";
const TopicMacBook = "MACBOOK";
const TopicMysteryBooks = "MYSTERY BOOKS";
//Topics 1,2,3

fetchDataFromAPI(TopicIphone).then(data => publish(data));
//const MysteryandSuspenseBooks = fetchDataFromAPI('Mystery and suspense books ');
//const MacBook = fetchDataFromAPI('MacBook');


//publish(MysteryandSuspenseBooks)



function publish(data) {

    const options = {
        url: 'http://127.0.0.1:8080',
        json: true,
        body: data
    };

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