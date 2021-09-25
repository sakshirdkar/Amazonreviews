const express  = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('./database/mongoose');
const list = require('./database/models/list')


app.use(express.json());
app.use(cors());

// app.get('/lists',(req,res) =>{
//     list.find({}).then(lists => res.send(lists))
// })

mongoose.connect('mongodb://database:27017/productsdb')
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));

app.listen(8080,() => console.log("Server is connected on port 8080"))