const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/AmazonProducts',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

let data;
const url = 'https://api.rainforestapi.com/categories?api_key=AB0A572943E2417784001C2E1F4BBC10&amazon_domain=amazon.com&type=standard&parent_id=1000';
request(url, { json: true }, (err, res, body) => {
  if (err) console.log(err);
  else if (res.statusCode === 200) {
    data = body;
    console.log(data);
  }
  else console.log(res.statusCode);
});

app.get("/", async (req, res) => {
  let val = req.params.id;
 
  try {
    const test = await db.collection('reviews').find({});
    db.close();
    if (test == null)
      res.json("Try Again");
    else {
      console.log('Response sent')
      res.json(test);
    }
  }
  catch (error) {
    console.log("Error in try")
     res.status(500).json({ message: error.message })
    
  };
})

app.post("/", function (req, res) {
    MongoClient.connect('mongodb://mongo:27017/', function (err, client) {
      assert.equal(null, err);
      try {
        const doc = { id: Number, data : data };
        client.db('AmazonProducts').collection('products').insertOne(doc, function (err, res) {
          if (err) throw err;
          
          console.log( "A document was inserted with the");
          //res.json({ id: ObjectID(), data : data });
          db.close();
        });
        
      }
      catch (error) {
        res.status(400).json(console.error({ message: error.message }));
      }
    });
      
  });

// const Item = require('./models/Item');

// app.get('/', (req, res) => {
//   Item.find()
//     .then(items => res.render('index', { items }))
//     .catch(err => res.status(404).json({ msg: 'No items found' }));
// });

// app.post('/item/add', (req, res) => {
//   const newItem = new Item({
//     name: req.body.name
//   });

//   newItem.save().then(item => res.redirect('/'));
// });

const port = 8080;

app.listen(port, () => console.log('Server running... on port 8080'));