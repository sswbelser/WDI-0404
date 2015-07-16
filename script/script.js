$(function() {
	var lines = [
	{text: "I'm not a photographer, but I can picture you and me together"},
	{text: "I'm having a sale in my bedroom. My clothes are 100% off"}
	];

	$line = _.template($("#lineTemplate").html());

	_.each(lines, function(line) {
		$("#lines").append($line(line));
	})
});