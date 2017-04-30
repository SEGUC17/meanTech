
//require depenciess
var express = require('express');
var router = require('./src/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var jwt = require('jsonwebtoken');
var token = require('./src/config/token');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', express.static('public'));
app.use(router);

const DB_URI = 'mongodb://team:12345@ds117251.mlab.com:17251/meantech';
mongoose.connect(DB_URI);

// start the server
app.listen(process.env.PORT || 8080, function () {
  console.log('server is listening on port 8080');
});
