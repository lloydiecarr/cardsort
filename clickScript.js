$(document).ready(function(){

	$.get("textFile.txt", function(data) {
		var items = data.split('\n');
		var chooseArray = [];
		var clicks = 0;
		
	$("#card").text(items[0]);
	
	$("#btn-yes").click(function(){
		clicks++;
		var chosen = Math.floor(clicks - 1);
		
		if (clicks <= items.length - 1){
			var result = items[chosen];
				$("#card").text(result);
				$("#chosen").append('<p>' + result + '</p><hr />');
					} else {
						$("#card").text("You are finished");
			}
		});
		
	$("#btn-no").click(function(){
		clicks++;
		
		if (clicks <= items.length - 1){
			var result = items[clicks];
				$("#card").text(result);
					} else {
						$("#card").text("You are finished");
			}
		});
	});
		
}); 
