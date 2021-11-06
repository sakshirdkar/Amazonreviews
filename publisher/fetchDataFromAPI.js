var axios = require("axios").default;

module.exports = function fetchDataFromAPI(Topic) {
    var options = {
        method: 'GET',
        url: 'https://amazon-products1.p.rapidapi.com/search',
        params: { country: 'US', query: Topic, page: '1' },
        headers: {
            'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
            'x-rapidapi-key': 'bfb6193e00msh5198d1c872bba32p160f59jsn2627c641dc72'
        }
    };

    const result = axios.request(options).then(function (response) {
        return response.data.results;
    }).catch(function (error) {
        console.error(error);
    });
    return result;
    // return [

    //     {

    //         asin: 'B0932FC8XR',

    //         title: '2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Pink',

    //         image: 'https://m.media-amazon.com/images/I/61AWSyzWrmS._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B0932FC8XR/?psc=1',

    //         prices: { current_price: 1299, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 550, stars: 4.8 },

    //         prime: false,

    //         sponsored: true

    //     },

    //     {

    //         asin: 'B08N5M7S6K',

    //         title: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold',

    //         image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B08N5M7S6K/?psc=1',

    //         prices: { current_price: 899.99, previous_price: 999, currency: '$' },

    //         reviews: { total_reviews: 10282, stars: 4.8 },

    //         prime: false,

    //         sponsored: true

    //     },

    //     {

    //         asin: 'B08N5M7S6K',

    //         title: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold',

    //         image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B08N5M7S6K/?psc=1',

    //         prices: { current_price: 899.99, previous_price: 999, currency: '$' },

    //         reviews: { total_reviews: 10282, stars: 4.8 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B08N5N6RSS',

    //         title: '2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray',

    //         image: 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B08N5N6RSS/?psc=1',

    //         prices: { current_price: 1199, previous_price: 1299, currency: '$' },

    //         reviews: { total_reviews: 4657, stars: 4.8 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B08821TJLG',

    //         title: '2020 Apple MacBook Pro with Intel Processor (13-inch, 16GB RAM, 1TB SSD Storage) - Space Gray',

    //         image: 'https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B08821TJLG/?psc=1',

    //         prices: { current_price: 1499.99, previous_price: 1999, currency: '$' },

    //         reviews: { total_reviews: 1732, stars: 4.8 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B09JQKBQSB',

    //         title: '2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Gray',

    //         image: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B09JQKBQSB/?psc=1',

    //         prices: { current_price: 2499, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 10, stars: 4 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B09JQSLL92',

    //         title: '2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Gray',

    //         image: 'https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B09JQSLL92/?psc=1',

    //         prices: { current_price: 1949.99, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 13, stars: 4.4 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B07VB5HWV2',

    //         title: 'Apple MacBook Pro MPXU2LL/A, 13.3-inch Retina Display, 2.3GHz Intel Core i5, 8GB RAM, 256GB SSD, Silver (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/71nM55mRvxL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B07VB5HWV2/?psc=1',

    //         prices: { current_price: 514.99, previous_price: 579, currency: '$' },

    //         reviews: { total_reviews: 1060, stars: 4.2 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B01LZORCUR',

    //         title: '(Refurbished) Apple MacBook Air MD760LL/A 13.3-Inch Laptop (Intel Core i5 Dual-Core 1.3GHz up to 2.6GHz, 4GB RAM, 128GB SSD, Wi-Fi, Bluetooth 4.0)',

    //         image: 'https://m.media-amazon.com/images/I/61oPbujIUkL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B01LZORCUR/?psc=1',

    //         prices: { current_price: 318.96, previous_price: 346.52, currency: '$' },

    //         reviews: { total_reviews: 2885, stars: 4.3 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B07G29RCBD',

    //         title: '(Refurbished) Apple MacBook Pro 13.3in Retina Laptop Intel i5 Dual Core 2.6GHz 8GB 128GB SSD - MGX72LL/A',

    //         image: 'https://m.media-amazon.com/images/I/71NZpTxWzRL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B07G29RCBD/?psc=1',

    //         prices: { current_price: 449, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 256, stars: 4.3 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B07BZF4MYM',

    //         title: '(Renewed) Apple MacBook Air MJVM2LL/A 11.6 Inch Laptop (Intel Core i5 Dual-Core 1.6GHz up to 2.7GHz, 4GB RAM, 128GB SSD, Wi-Fi, Bluetooth 4.0, Integrated Intel HD Graphics 6000, Mac OS)',

    //         image: 'https://m.media-amazon.com/images/I/91wYB53Y4aL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B07BZF4MYM/?psc=1',

    //         prices: { current_price: 291.44, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 2394, stars: 4.3 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B07H8NBB62',

    //         title: 'Mid 2017 Apple MacBook Pro with Touch Bar, with 3.1GHz Intel Core i5 (13-inch, 8GB RAM, 512GB SSD) - Space Gray (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/61SRQUe+LhL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B07H8NBB62/?psc=1',

    //         prices: { current_price: 744.34, previous_price: 789, currency: '$' },

    //         reviews: { total_reviews: 547, stars: 4.1 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B08FG7S7G7',

    //         title: 'Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic Keyboard) - Space Gray (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/716tdyGC3+L._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B08FG7S7G7/?psc=1',

    //         prices: { current_price: 799.99, previous_price: 869, currency: '$' },

    //         reviews: { total_reviews: 55, stars: 4.4 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B08HKQJ5D3',

    //         title: 'Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/711ox5+Z26L._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B08HKQJ5D3/?psc=1',

    //         prices: { current_price: 1999, previous_price: 2299.99, currency: '$' },

    //         reviews: { total_reviews: 76, stars: 4.4 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B07FTQMMGH',

    //         title: 'Apple MacBook Air 13.3in LED Laptop Intel i5-5250U Dual Core 1.6GHz 4GB 128GB SSD Early 2015 - MJVE2LL/A (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/61oPbujIUkL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B07FTQMMGH/?psc=1',

    //         prices: { current_price: 304.85, previous_price: 349.99, currency: '$' },

    //         reviews: { total_reviews: 1208, stars: 4.3 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B07DRR761F',

    //         title: 'Apple MacBook Pro MLL42LL/A 13.3-inch Laptop, 2.0GHz dual-core Intel Core i5, 8GB Ram, 256GB SSD, Retina Display, Space Gray (Discontinued by Manufacturer) (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/61SRQUe+LhL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B07DRR761F/?psc=1',

    //         prices: { current_price: 502.63, previous_price: 549, currency: '$' },

    //         reviews: { total_reviews: 206, stars: 4.1 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B08376JQLJ',

    //         title: 'Apple MacBook Pro With Touch Bar Intel Core i5, 13-inch, 8GB RAM, 256GB Storage Space Gray (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/71i49M4hv2L._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B08376JQLJ/?psc=1',

    //         prices: { current_price: 739, previous_price: 790, currency: '$' },

    //         reviews: { total_reviews: 735, stars: 4.6 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B0784J8FXM',

    //         title: 'Apple MacBook Pro 15in Core i7 2.5GHz Retina (MGXC2LL/A), 16GB Memory, 512GB Solid State Drive (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/716NEN4UVXL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B0784J8FXM/?psc=1',

    //         prices: { current_price: 787.13, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 1391, stars: 4.2 },

    //         prime: false,

    //         sponsored: false

    //     },

    //     {

    //         asin: 'B09J2VXQXF',

    //         title: 'Terasako Coiled USB C to USB C Cable, Spring USB Type C Charging Cable, Fast Type C Charge Cord and Data Transfer for MacBook Pro 2020, Pad Pro, Pad Air 4, Galaxy S20, and Other USB C Devices',

    //         image: 'https://m.media-amazon.com/images/I/61FqlWsDELL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B09J2VXQXF/?psc=1',

    //         prices: { current_price: 14.99, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 0, stars: -1 },

    //         prime: false,

    //         sponsored: true

    //     },

    //     {

    //         asin: 'B08VW6PTNC',

    //         title: 'Apple MacBook Air 13.3in MWTJ2LL/A Early 2020 - Core i5, 16GB RAM, 512GB SSD - Space Gray (Renewed)',

    //         image: 'https://m.media-amazon.com/images/I/61vLa+E79nL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B08VW6PTNC/?psc=1',

    //         prices: { current_price: 829, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 22, stars: 4.8 },

    //         prime: false,

    //         sponsored: true

    //     },

    //     {

    //         asin: 'B09FT7WJG8',

    //         title: 'CUULAH Travel Backpack, Slim Pink Backpack with Laptop Sleeve, Anti Theft Backpack Water Resistant Casual Work Weekender College Backpack For Women & Girls , Fits 15.6 Inch Laptop, Macbook (Pink)',

    //         image: 'https://m.media-amazon.com/images/I/61PbOiFlREL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B09FT7WJG8/?psc=1',

    //         prices: { current_price: 89.98, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 0, stars: -1 },

    //         prime: false,

    //         sponsored: true

    //     },

    //     {

    //         asin: 'B09F8SXVWW',

    //         title: 'LEN ThinkPad T15 Laptop Notebook 15", 15 inch, 15.6 inch Display, i5, i5-10310U, 4.40 GHz, FHD 1920x1080, IPS, 250 nits, Anti-Glare, W10P, Black, (3Y Onsite + 3Y Battery Warranty) (8 GB, 256GB SSD)',

    //         image: 'https://m.media-amazon.com/images/I/51JL0JeGKPL._AC_UY218_.jpg',

    //         full_link: 'https://www.amazon.com/dp/B09F8SXVWW/?psc=1',

    //         prices: { current_price: 1599.99, previous_price: -1, currency: '$' },

    //         reviews: { total_reviews: 0, stars: -1 },

    //         prime: false,

    //         sponsored: true

    //     }

    // ];
};