var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;
 
app.get('/', function (req, res) {
  res.send('Hello Aidan')
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT);
});