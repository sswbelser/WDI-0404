// models.js

var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var LineSchema = new Schema({
	text: { type: String, required: true }
});

var Line = mongoose.model("Line", LineSchema);

module.exports.Line = Line;