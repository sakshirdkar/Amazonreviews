const request = require('request');
// const request = require('axios');
async function fetchDataFromAPI(Topic) {
    const options = {
        method: 'GET',
        url: 'https://amazon-products1.p.rapidapi.com/search',
        qs: { country: 'US', query: Topic, page: '1' },
        headers: {
            'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
            'x-rapidapi-key': '9dde9552d6msha8340ad20371c38p1cbd95jsnfd9e75355554',
            useQueryString: true
        }
    };

    const response = request(options);
    console.log("response",response)
    const data = {
        "topicName": Topic,
        "results": response.results
    }

    return data;

}
module.exports = fetchDataFromAPI;