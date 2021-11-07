var axios = require("axios").default;

module.exports = function fetchDataFromAPI(Topic) {
    var options = {
        method: 'GET',
        url: 'https://amazon-products1.p.rapidapi.com/search',
        params: { country: 'US', query: Topic, page: '1' },
        headers: {
            'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
            'x-rapidapi-key': '0a8d3e5c3bmsh9dd96bb27719452p1d9583jsn3531904d5cfb'
        }
    };

    const result = axios.request(options).then(function (response) {
        return response.data.results;
    }).catch(function (error) {
        console.error(error);
    });
    return result;
};