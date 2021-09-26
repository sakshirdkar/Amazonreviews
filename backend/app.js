const express  = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('./database/mongoose');
const request = require('request');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// const as
const list = require('./database/models/list')


app.use(express.json());
app.use(cors());

// app.get('/lists',(req,res) =>{
//     list.find({}).then(lists => res.send(lists))
// })



//Step 1 : Connection with Mongoose
//For Container
//const mongodb_url = "mongodb://database/amazon-products-db";
//For Local DB
const mongodb_url = "mongodb://localhost/AmazonProducts";
mongoose.connect(mongodb_url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));



//Step-2: Fetching data from API
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


//Test for Local DB 
// const bookSchema = new mongoose.Schema({
//             id: Number,
//             name: String,
//         });
// const books = mongoose.model("Books",bookSchema);


//Step-3: Test with Get API
app.get("/", async (req, res) => {
    let val = req.params.id;
    
//Step-4:  Post Storing data to db   
// For Container
app.post("/", function (req, res) {
  MongoClient.connect('mongodb://localhost:27017/', function (err, client) {
    assert.equal(null, err);
    try {
      const doc = { id: Number, data : data };
      client.db('AmazonReviews').collection('reviews').insertOne(doc, function (err, res) {
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
    
    
//Local DB
//   try {
//     const test = await MongoClient.db('AmazonProducts').collection('Books').find({});
//     db.close();
//     if (test == null)
//       res.json("Try Again");
//     else {
//       console.log(test)
//       res.json(test);
//     }
//   }
//   catch (error) {
//       console.log("Error in try", {
//           message: error.message
//       })
//      res.status(500).json({ message: error.message })
    
//   };
})






// mongoose.connect('mongodb://database:27017/productsdb')
//     .then(() => console.log("Database connected"))
//     .catch((error) => console.log(error));

app.listen(8080,() => console.log("Server is connected on port 8080"))