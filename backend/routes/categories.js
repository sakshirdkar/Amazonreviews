const express = require('express');
const request = require('request');
const router = express.Router();
const Category = require('../database/models/Category');

// // get data from the rainforest api
// const url = 'https://api.rainforestapi.com/categories?api_key=AB0A572943E2417784001C2E1F4BBC10&amazon_domain=amazon.com&type=standard&parent_id=1000';
// request(url, { json: true }, (err, res, body) => {
//   if (err) console.log(err);
//   else if (res.statusCode === 200) {
//     const categoriesFromApi = body;
//     console.log(categoriesFromApi);
//     storeCategories(categoriesFromApi);
//   }
//   else console.log(res.statusCode);
// });

function storeCategories(categoriesFromApi){
    categoriesFromApi.categories.forEach(categoryFromApi => {
        const category = new Category({
            amazon_domain : categoryFromApi.amazon_domain,
            id: categoryFromApi.id,
            name: categoryFromApi.name,
            has_children: categoryFromApi.has_children,
            is_root: categoryFromApi.is_root,
            path: categoryFromApi.path,
            parent_id: categoryFromApi.parent_id,
            parent_name: categoryFromApi.parent_name,
            link: categoryFromApi.link,
            type: categoryFromApi.type
        });
        category.save();
    });
}

router.get('/',async (req,res) =>{
    const categories = await Category.find();
    res.json(categories);
    
});

module.exports = router;

