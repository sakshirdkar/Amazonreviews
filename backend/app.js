const express  = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('./database/mongoose');
const list = require('./database/models/list')


app.use(express.json());
app.use(cors());

app.get('/lists',(req,res) =>{
    list.find({}).then(lists => res.send(lists))
})

app.listen(3000, () => console.log("Server is connected on port 3000"))