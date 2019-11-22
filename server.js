// Dependencies
var mongojs = require("mongojs");
var cheerio = require("cheerio");
var axios = require("axios");
var express = require("express");
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000
app.use(express.static("public"));