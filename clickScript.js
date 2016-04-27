$(document).ready(function(){

	$.get("textFile.txt", function(data) {
		var items = data.split('\n');
		var chooseArray = [];
		var clicks = 0;
		
	$("#card").text('"' + items[0] + '"');
	$("#count").text(clicks + 1);
	
	$("#btn-yes").click(function(){
		clicks++;
		var chosen = Math.floor(clicks - 1);
		var next = items[clicks];
		
			$("#card").text('"' + next + '"');
			
		if (clicks <= items.length - 1){
			var result = items[chosen];
				$("#count").text(clicks + 1);
				$("#chosen").append('<p>' + result + '</p><hr />');
					} else {
				$("#card").text("You are finished");
			}
		});
		
	$("#btn-no").click(function(){
		clicks++;
		
		if (clicks <= items.length - 1){
			var result = items[clicks];
				$("#count").text(clicks + 1);
				$("#card").text('"' + result + '"');
					} else {
				$("#card").text("You are finished");
			}
		});
	});
		
}); 
