$(document).ready(function(){

	$.get("textFile.txt", function(data) {
		var items = data.split('\n');
		var chooseArray = [];
		var clicks = 0;
		
	$("#card").text(items[0]);
	
	$("#btn-yes").click(function(){
		clicks++;
		console.log("click");
		if (clicks <= items.length - 1){
		var result = items[clicks];
			$("#card").text(result);
			$("#chosen").append(result + '<hr />');
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

/* function triggerMe(n){
		console.log("clicked" + n);
	} */

