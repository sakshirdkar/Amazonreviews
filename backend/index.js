const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import routes
const categoryRoutes = require('./routes/categories');
app.use('/',categoryRoutes);


// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/AmazonProducts',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const port = 8080;

app.listen(port, () => console.log('Server running... on port 8080'));