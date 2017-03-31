//require depenciess
var express = require('express');
var router = require('./src/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/sprint1";

var app = express();

app.set('view engine', 'ejs');

// configure app
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(__dirname + '/public'));

mongoose.connect(DB_URI);
app.use(router);


// start the server
app.listen(8080, function() {
    console.log("server is listening on port 1112");
})
