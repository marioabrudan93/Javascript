$(document).ready(function(){
	var nr1 = 0;
	var nr2 = 0;
	var type = "";

	// "Close the computer"
	$(".x").click(function(){
		$("body").hide();
	});

	// Display the numbers in iput
	$(".numbers").click(function(){
		$(".input").val($(".input").val() + $(this).html());
	});

	// Delete the numbers one by one
	$(".del").click(function(){
		var value = $(".input").val();
		var shortValue = value.substr(0, value.length - 1);
		$(".input").val(shortValue);
	});

	// Delete all once
	$(".clear").click(function(){
		$(".input").val("");
	});

	// Display the point
	$(".point").click(function(){
		var point = $(".input").val();
		var n = point.indexOf(".");

		if(n >= 0) {
			return;
		}
		 
		var p = $(".input").val() + $(this).html();
		$(".input").val(p);
	});

	// Calculations
	$("#plus").click(function(){
		type = "+";
		nr1 = $(".input").val();
		$(".input").val("");
	});

	$("#minus").click(function(){
		type = "-";
		nr1 = $(".input").val();
		$(".input").val("");
	});

	$("#multi").click(function(){
		type = "*";
		nr1 = $(".input").val();
		$(".input").val("");
	});

	$("#division").click(function(){
		type = "/";
		nr1 = $(".input").val();
		$(".input").val("");
	});

	// The result
	$("#rez").click(function(){
		nr2 = $(".input").val();

		if(type == "+") {
			var c = parseFloat(nr1) + parseFloat(nr2);
			$(".input").val(c);
		} else if(type == "-") {
			var c = parseFloat(nr1) - parseFloat(nr2);
			$(".input").val(c);
		} else if(type == "*") {
			var c = parseFloat(nr1) * parseFloat(nr2)
			$(".input").val(c);
		} else if (type == "/") {
			if (nr2 == 0) {
				var c = "Cannot divide by zero";
			} else {
				var c = parseFloat(nr1) / parseFloat(nr2);
			}
		}		
		$(".input").val(c);
	});

})