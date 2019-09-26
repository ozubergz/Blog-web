const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true})); //body parser middleware

// connect to mongodb with mongoose
mongoose.connect('mongodb://localhost:27017/clientDB', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


//create new schema Blog
const blogSchema = new Schema ({
  title: String,
  body: String,
  // categorie: String,
  date: { type: Date, default: Date.now }
});

//create model
const Blog = mongoose.model('Blog', blogSchema);

// app.get('/admin', function(req, res) {
  
// });

//port listen
app.listen(4000, function() {
  console.log('Server is running on port 4000.')
});