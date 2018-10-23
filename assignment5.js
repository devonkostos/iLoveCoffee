$(document).ready(function() {
	$("#area1").offset({left:200, 
						top:100});
	$("#title").offset({left:202, 
						top:20});
	$("#title").hover(function() {
		$(this).stop(true, true).animate({"opacity": "0.5", 
										  "padding": "+=5px"}, "fast");
	}, function() {	
		$(this).stop(true, true).animate({"opacity": "1.0", 
										  "padding": "-=5px"}, "fast");
	});							
	$(".headline").addClass("label");
	$(".article").addClass("text");
	$(".answer").addClass("response");
	$(".answer").hide();
	$(".headline:eq(0)").offset({left:207, 
								 top:125});
	$(".headline:eq(0)").append("<br>" + 
						'<img src="coffee1.jpg" width="485" height="165">');
	$(".article:eq(0)").offset({left:207, 
								top:350});
	$(".question:eq(0)").click(function(event) {
		event.preventDefault();
		$(".answer:eq(0)").fadeToggle("slow");
		if ($(".question:eq(0)").text() === "Is all of that really true?") {
			$(".question:eq(0)").text("(Hide Me.)");
		}
		else {
			$(".question:eq(0)").text("Is all of that really true?");
		}
	});
	$(".answer:eq(0)").offset({left:207, 
							   top:740});
	$(".headline:eq(1)").offset({left:780, 
								 top:125});
	$(".headline:eq(1)").append("<br>" + 
						'<img src="coffee2.jpg" width="485" height="165">');
	$(".article:eq(1)").offset({left:780, 
								top:350});
	$(".question:eq(1)").click(function(event) {
		event.preventDefault();
		$(".answer:eq(1)").slideToggle(500);
		if ($(".question:eq(1)").text() === "How do I take my coffee?") {
			$(".question:eq(1)").text("(Hide Me.)");
		}
		else {
			$(".question:eq(1)").text("How do I take my coffee?");
		}
	});
	$(".answer:eq(1)").offset({left:780, 
							   top:800});
	$("#popular").offset({left:1350, 
						  top:130});
	$("#popular").hover(function() {
		$("h2").eq(0).hide("slow", function() {
			$("h2").show(1500);
		});
	});
	$("#footer").offset({left:202, 
						 top:880});
	$("#footer").hover(function() {
		$(this).stop(true, true).animate({"font-size": "+=20px"}, 500, "linear");
	}, function() {
		$(this).stop(true, true).animate({"font-size": "-=20px"}, 500, "linear");
	});
});