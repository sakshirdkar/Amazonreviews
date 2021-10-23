var axios = require("axios").default;

module.exports = function fetchDataFromAPI(Topic){
    var options = {
    method: 'GET',
    url: 'https://amazon-products1.p.rapidapi.com/search',
    params: {country: 'US', query: Topic, page: '1'},
    headers: {
        'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
        'x-rapidapi-key': 'bfb6193e00msh5198d1c872bba32p160f59jsn2627c641dc72'
    }
    };

    const result = axios.request(options).then(function (response) {
      return  response.data.results;
    }).catch(function (error) {
        console.error(error);
    });
    return result;
};