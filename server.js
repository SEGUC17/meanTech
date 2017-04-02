// require depenciess

const express = require('express');
const router = require('./src/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/public'));

app.use(router);

const DB_URI = 'mongodb://localhost:27017/sprint1';
mongoose.connect(DB_URI);

// start the server
app.listen(8080, function () {
  console.log('server is listening on port 8080');
});
