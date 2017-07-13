$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
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

//scroll top-link transparent
$(function() {
    var header = $("#top-line");
    $(window).scroll(function(scrlevt) {
        scrlevt.preventDefault();
        var scroll = $(window).scrollTop();

        if (scroll > 20) {
            header.removeClass('header-scroll-off').addClass("header-scroll");
        } else {
            header.removeClass("header-scroll").addClass('header-scroll-off');
        }

        return false;
    });
});

// slider reviews
$(".rev-block").not(":first").hide();
$(".rev-img").click(function() {
    $(".rev-img").removeClass("active").eq($(this).index()).addClass("active");
    $(".rev-block").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
