
//require depenciess
var express = require('express');
var router = require('./src/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var token = require('./src/config/token');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use(express.static('/public'));

app.use(router);

const DB_URI = 'mongodb://localhost:27017/sprint1';
mongoose.connect(DB_URI);

// start the server
app.listen(8080, function () {
  console.log('server is listening on port 8080');
});
