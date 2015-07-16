// SERVER NODE.JS

// require express framework and additional modules
var express = require("express"),
	app = express(),
	_ = require("underscore"),
	cors = require("cors"),
	mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/pickup");
var db = require("./models/models");

// serve js and css files from public folder
app.use(express.static(__dirname));

// show HTML file on main page
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

// Open the API to requests from any domain
app.use(cors());

// Lines#query
app.get("/api/lines", function (req, res) {
	db.Line.find().exec(function (err, lines) {
		res.json(lines);
	});
});

app.listen(process.env.PORT || 3000);
// Add Mongo Lab to Heroku