$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

		$(".carousel").owlCarousel({
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(window).scroll(function() {

	var st = $(this).scrollTop();

	$(".sect_1").css({
		"transform" : "translate(0%, " + st / 5 + "%"
	});
	$(".sect_2").css({
		"transform" : "translate(0%, " + st / 4 + "%"
	});
	$(".content").css({
		"transform" : "translate(0%, -" + st / 5 + "%"
	});
	});