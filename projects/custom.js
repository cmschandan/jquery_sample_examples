"use strict";

$(document).ready( function(){
	// $("div").click(function(){
	// 	console.log("Div is clicked ");
	// 	console.log($(this));

	// 	$(this).hide();
	// });

	// $("*").click(function(){
	// 	console.log("All element selector");
	// });

	/*ID Selector*/
	$(".class2:even").click(function(){
		console.log("multiple function in one value");
	});

	// $(".epicClass").click(function(){
	// 	console.log("Epic Class is clicked");
	// });

	$("tr:odd").css("background-color","yellow");
	$("tr:even").css("background-color","red");

	$("div > span").css("color","red");
	$("div").css("font-size","20px");

	/*attributes jquery*/
	$( "div[target='_blank']" ).click(function(){
		console.log("target is blank");
	});

	/*input type*/
	$(":button").click(function(){
		console.log( "Button is Clicked" );
	} );

	$(":input").click( function(){
		console.log("input is clicked");
	} );
});