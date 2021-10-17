const request = require('request');
function IPhone12() {
    const options = {
        method: 'GET',
        url: 'https://amazon-products1.p.rapidapi.com/search',
        qs: { country: 'US', query: 'IPhone12', page: '1' },
        headers: {
            'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
            'x-rapidapi-key': '9dde9552d6msha8340ad20371c38p1cbd95jsnfd9e75355554',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        return body.results;
    });

}
module.exports = IPhone12;