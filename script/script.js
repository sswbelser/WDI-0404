$(function() {

	var devUrl = "http://localhost:3000"
	// var baseUrl = "https://[HEROKU URL"

	$.get("/api/lines", function (data) {
		var lines = data;
		_.each(lines, function(line) {
		$("#lines").append($line(line));
		});
	});

	$line = _.template($("#lineTemplate").html());
});