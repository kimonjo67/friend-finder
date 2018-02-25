//Dependencies
var express = require("express");
var bodyParser= require("body-parser");
var path = require("path");

//Sets the express app
var app = express();
var PORT = process.env.port || 3000;

// Sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

