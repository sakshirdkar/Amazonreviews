// const request = require('request');
// async function fetchDataFromAPI(Topic) {
//     const options = {
//         method: 'GET',
//         url: 'https://amazon-products1.p.rapidapi.com/search',
//         qs: { country: 'US', query: Topic, page: '1' },
//         headers: {
//             'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
//             'x-rapidapi-key': '52dbbe839dmshe6180372ad28496p1d28fcjsnc17ef4914a33',
//             useQueryString: true
//         }
//     };

//     const response = request(options);
//     console.log("response",response)
//     const data = {
//         "topicName": Topic,
//         "results": response.results
//     }

//     return data;

// }

var axios = require("axios").default;

module.exports = function fetchDataFromAPI(Topic){
    var options = {
    method: 'GET',
    url: 'https://amazon-products1.p.rapidapi.com/search',
    params: {country: 'US', query: Topic, page: '1'},
    headers: {
        'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
        'x-rapidapi-key': '52dbbe839dmshe6180372ad28496p1d28fcjsnc17ef4914a33'
    }
    };

    const result = axios.request(options).then(function (response) {
      return  response.data.results;
    }).catch(function (error) {
        console.error(error);
    });
    return result;
};