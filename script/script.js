$(function() {

	var baseUrl = "http://"

	$.get("/api/lines", function (data) {
		var lines = data;
		_.each(lines, function(line) {
		$("#lines").append($line(line));
		});
	});

	$line = _.template($("#lineTemplate").html());
});