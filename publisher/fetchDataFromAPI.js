const request = require('request');
async function fetchDataFromAPI(Topic) {
    const options = {
        method: 'GET',
        url: 'https://amazon-products1.p.rapidapi.com/search',
        qs: { country: 'US', query: Topic, page: '1' },
        headers: {
            'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
            'x-rapidapi-key': '52dbbe839dmshe6180372ad28496p1d28fcjsnc17ef4914a33',
            useQueryString: true
        }
    };

    const response = await request(options);
    const data = {
        "topicName": Topic,
        "results": response.results
    }

    return data;

}
module.exports = fetchDataFromAPI;