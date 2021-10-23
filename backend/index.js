const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials:true
}));
app.use(express.urlencoded({ extended: false }));

//passport
var passport = require('passport');
var session = require('express-session');
app.use(session({
  name:'myname.sid',
  resave:false,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  },
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

// import routes
const categoryRoutes = require('./routes/categories');
const messageRoutes = require('./routes/messages');
const userRoutes = require('./routes/users');
const subscriptionRoutes = require('./routes/subscriptions');
app.use('/users/',userRoutes);
app.use('/subscribe/',subscriptionRoutes);

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://localhost:27017/AmazonProducts',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const port = 8080;

app.listen(port, () => console.log('Server running... on port 8080'));