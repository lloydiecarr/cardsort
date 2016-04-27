$(document).ready(function(){
	//import word list
	$.get("textFile.txt", function(data) {
		//split data at new lines
		var items = data.split('\n');
		//new array for word list
		var chooseArray = [];
		var clicks = 0;
	
	//display first word
	$("#card").text('"' + items[0] + '"');
	//Add 1 to on screen counter (array 0 is fist character)
	$("#count").text(clicks + 1);
	
	//detect click
	$("#btn-yes").click(function(){
		clicks++;
		
		//minus 1 to record last clicked item not next
		var chosen = Math.floor(clicks - 1);
		var next = items[clicks];
		
			//update word on screen
			$("#card").text('"' + next + '"');
		
		//update chosen list & on screen counter
		if (clicks <= items.length - 1){
			var result = items[chosen];
				$("#count").text(clicks + 1);
				$("#chosen").append('<p>' + result + '</p><hr />');
					} else {
				//if there are no more words
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
