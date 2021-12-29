$(document).ready(() => {
	$("html, body").animate({ scrollTop: 0 }, 1500);
	$(".navbar").css({ "margin-top": "0" });

	$(".mouse").click(() => {
		$("html, body").animate({ scrollTop: $(".about").offset().top }, 1500);
	});

	$(".home").click(() => {
		$("html, body").animate({ scrollTop: 0 }, 1500);
	});

	$(".cred").click(() => {
		$("html, body").animate({ scrollTop: $(".menu").offset().top }, 1500);
	});

	$(".contactus").click(() => {
		$("html, body").animate(
			{ scrollTop: $(".contact-details").offset().top },
			1500
		);
	});

	$(".navbar-toggler i").click(async function () {
		if (
			$(this).hasClass("fas fa-align-right") ||
			$(this).hasClass("fa-align-right fas")
		) {
			$(this).removeClass("fas fa-align-right");
			$(this).addClass("fas fa-times");
		} else if (
			$(this).hasClass("fas fa-times") ||
			$(this).hasClass("fa-times fas")
		) {
			$(this).removeClass("fas fa-times");
			$(this).addClass("fas fa-align-right");
		}
	});

	$(".aboutus").click(() => {
		$("html, body").animate({ scrollTop: $(".about").offset().top }, 1200);
	});

	let cakes = $(".cakes");
	let breads = $(".breads");
	let donuts = $(".donuts");
	let cookie = $(".cookie");
	let others = $(".others");

	cakes.click(() => {
		$(".menu-block").addClass("animate__animated");
		$(".menu-block").addClass("animate__fadeIn");
		setTimeout(() => {
			$(".menu-block").removeClass("animate__animated");
			$(".menu-block").removeClass("animate__fadeIn");
		}, 100);
		$(".menu-block1").find(".item-name").text("Black forest");
		$(".menu-block1").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block1").find(".item-price").text("₹ 750.00");
		$(".menu-block1")
			.find(".item-img")
			.attr("src", "../images/blackforest.jpg");

		$(".menu-block2").find(".item-name").text("Red velvet");
		$(".menu-block2").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block2").find(".item-price").text("₹ 455.00");
		$(".menu-block2").find(".item-img").attr("src", "../images/redvelvet.jpg");

		$(".menu-block3").find(".item-name").text("Choco truffle");
		$(".menu-block3").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block3").find(".item-price").text("₹ 606.00");
		$(".menu-block3")
			.find(".item-img")
			.attr("src", "../images/chocotruffle.jpg");

		$(".menu-block4").find(".item-name").text("Raspberry roll");
		$(".menu-block4").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block4").find(".item-price").text("₹ 756.00");
		$(".menu-block4").find(".item-img").attr("src", "../images/raspberry.jpg");

		$(".menu-block5").find(".item-name").text("Sweet chocolate");
		$(".menu-block5").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block5").find(".item-price").text("₹ 455.00");
		$(".menu-block5")
			.find(".item-img")
			.attr("src", "../images/sweetchocolate.jpg");

		$(".menu-block6").find(".item-name").text("Blueberry");
		$(".menu-block6").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block6").find(".item-price").text("₹ 606.00");
		$(".menu-block6").find(".item-img").attr("src", "../images/blueberry.jpg");
	});

	breads.click(() => {
		$(".menu-block").addClass("animate__animated");
		$(".menu-block").addClass("animate__fadeIn");
		setTimeout(() => {
			$(".menu-block").removeClass("animate__animated");
			$(".menu-block").removeClass("animate__fadeIn");
		}, 100);
		$(".menu-block1").find(".item-name").text("White Bread");
		$(".menu-block1").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block1").find(".item-price").text("₹ 606.00");
		$(".menu-block1").find(".item-img").attr("src", "../images/whitebread.jpg");

		$(".menu-block2").find(".item-name").text("Wheat Bread");
		$(".menu-block2").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block2").find(".item-price").text("₹ 756.00");
		$(".menu-block2").find(".item-img").attr("src", "../images/wheatbread.jpg");

		$(".menu-block3").find(".item-name").text("Multigrain Bread");
		$(".menu-block3").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block3").find(".item-price").text("₹ 455.00");
		$(".menu-block3")
			.find(".item-img")
			.attr("src", "../images/multigrainbread.jpg");

		$(".menu-block4").find(".item-name").text("Sourdough Bread");
		$(".menu-block4").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block4").find(".item-price").text("₹ 455.00");
		$(".menu-block4").find(".item-img").attr("src", "../images/sourdough.jpg");

		$(".menu-block5").find(".item-name").text("Rye Bread");
		$(".menu-block5").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block5").find(".item-price").text("₹ 756.00");
		$(".menu-block5").find(".item-img").attr("src", "../images/ryebread.jpg");

		$(".menu-block6").find(".item-name").text("Loaf Bread");
		$(".menu-block6").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block6").find(".item-price").text("₹ 606.00");
		$(".menu-block6").find(".item-img").attr("src", "../images/loafbread.jpg");
	});

	donuts.click(() => {
		$(".menu-block").addClass("animate__animated");
		$(".menu-block").addClass("animate__fadeIn");
		setTimeout(() => {
			$(".menu-block").removeClass("animate__animated");
			$(".menu-block").removeClass("animate__fadeIn");
		}, 100);
		$(".menu-block1").find(".item-name").text("Chocolate Doughnut");
		$(".menu-block1").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block1").find(".item-price").text("₹ 756.00");
		$(".menu-block1")
			.find(".item-img")
			.attr("src", "../images/chocolatedonut.jpg");

		$(".menu-block2").find(".item-name").text("Strawberry Doughnut");
		$(".menu-block2").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block2").find(".item-price").text("₹ 455.00");
		$(".menu-block2")
			.find(".item-img")
			.attr("src", "../images/strawberrydonut.jpg");

		$(".menu-block3").find(".item-name").text("Vannila Doughnut");
		$(".menu-block3").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block3").find(".item-price").text("₹ 606.00");
		$(".menu-block3")
			.find(".item-img")
			.attr("src", "../images/vanniladonut.jpg");

		$(".menu-block4").find(".item-name").text("Jelly Doughnut");
		$(".menu-block4").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block4").find(".item-price").text("₹ 756.00");
		$(".menu-block4").find(".item-img").attr("src", "../images/jellydonut.jpg");

		$(".menu-block5").find(".item-name").text("Oreo Doughnut");
		$(".menu-block5").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block5").find(".item-price").text("₹ 455.00");
		$(".menu-block5").find(".item-img").attr("src", "../images/oreodonut.jpg");

		$(".menu-block6").find(".item-name").text("Blueberry Doughnut");
		$(".menu-block6").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block6").find(".item-price").text("₹ 606.00");
		$(".menu-block6")
			.find(".item-img")
			.attr("src", "../images/blueberrydonut.jpg");
	});

	cookie.click(() => {
		$(".menu-block").addClass("animate__animated");
		$(".menu-block").addClass("animate__fadeIn");
		setTimeout(() => {
			$(".menu-block").removeClass("animate__animated");
			$(".menu-block").removeClass("animate__fadeIn");
		}, 100);
		$(".menu-block1").find(".item-name").text("Chocochip Cookie");
		$(".menu-block1").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block1").find(".item-price").text("₹ 756.00");
		$(".menu-block1")
			.find(".item-img")
			.attr("src", "../images/chocochipcookie.jpg");

		$(".menu-block2").find(".item-name").text("Fortune Cookie");
		$(".menu-block2").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block2").find(".item-price").text("₹ 606.00");
		$(".menu-block2")
			.find(".item-img")
			.attr("src", "../images/fortunecookie.jpg");

		$(".menu-block3").find(".item-name").text("Macaroons");
		$(".menu-block3").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block3").find(".item-price").text("₹ 455.00");
		$(".menu-block3")
			.find(".item-img")
			.attr("src", "../images/macaroonscookie.jpg");

		$(".menu-block4").find(".item-name").text("Oatmeal Cookie");
		$(".menu-block4").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block4").find(".item-price").text("₹ 455.00");
		$(".menu-block4")
			.find(".item-img")
			.attr("src", "../images/oatmealcookie.jpg");

		$(".menu-block5").find(".item-name").text("Peanut Butter Cookie");
		$(".menu-block5").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block5").find(".item-price").text("₹ 756.00");
		$(".menu-block5")
			.find(".item-img")
			.attr("src", "../images/peanutbuttercookie.jpg");

		$(".menu-block6").find(".item-name").text("Sugar Cookie");
		$(".menu-block6").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block6").find(".item-price").text("₹ 606.00");
		$(".menu-block6")
			.find(".item-img")
			.attr("src", "../images/sugarcookie.jpg");
	});

	others.click(() => {
		$(".menu-block").addClass("animate__animated");
		$(".menu-block").addClass("animate__fadeIn");
		setTimeout(() => {
			$(".menu-block").removeClass("animate__animated");
			$(".menu-block").removeClass("animate__fadeIn");
		}, 100);
		$(".menu-block1").find(".item-name").text("Burger");
		$(".menu-block1").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block1").find(".item-price").text("₹ 756.00");
		$(".menu-block1")
			.find(".item-img")
			.attr("src", "../images/otherburger.jpg");

		$(".menu-block2").find(".item-name").text("French Fries");
		$(".menu-block2").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block2").find(".item-price").text("₹ 455.00");
		$(".menu-block2")
			.find(".item-img")
			.attr("src", "../images/otherfrench.jpg");

		$(".menu-block3").find(".item-name").text("Pizza");
		$(".menu-block3").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block3").find(".item-price").text("₹ 606.00");
		$(".menu-block3").find(".item-img").attr("src", "../images/otherpizza.jpg");

		$(".menu-block4").find(".item-name").text("Samosa");
		$(".menu-block4").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block4").find(".item-price").text("₹ 756.00");
		$(".menu-block4")
			.find(".item-img")
			.attr("src", "../images/othersamosa.jpg");

		$(".menu-block5").find(".item-name").text("Sandwitch");
		$(".menu-block5").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block5").find(".item-price").text("₹ 455.00");
		$(".menu-block5")
			.find(".item-img")
			.attr("src", "../images/othersandwitch.jpg");

		$(".menu-block6").find(".item-name").text("Puppz");
		$(".menu-block6").find(".item-desc").text("Lorem ipsum dolor sit.");
		$(".menu-block6").find(".item-price").text("₹ 606.00");
		$(".menu-block6").find(".item-img").attr("src", "../images/otherpuppz.jpg");
	});

	$(".gototop").hide();

	if ($(window).scrollTop() > 600) {
		$(".gototop").addClass(
			"animate__animated animate__backInDown animate__slow"
		);
		$(".gototop").show();
		$(".navbar").css({
			position: "fixed",
			width: "97vw",
			"background-color": "#fff",
			"box-shadow": "2px 2px 7px #ccc",
			padding: "1rem"
		});
		$(".navbar-brand").css({ color: "#111" });
		$(".nav-item a").css({ color: "#111" });
		$("button.navbar-toggler i").css({ color: "#111" });
	} else {
		$(".gototop").hide();
		$(".gototop").removeClass(
			"animate__animated animate__backInDown animate__slow"
		);
		$(".navbar").css({
			position: "relative",
			width: "100%",
			"background-color": "transparent",
			"box-shadow": "none",
			margin: "0"
		});
		$(".navbar-brand").css({ color: "#fff" });
		$(".nav-item a").css({ color: "#fff" });
		$("button.navbar-toggler i").css({ color: "#fff" });
	}

	$(window).scroll(() => {
		console.log($(this).scrollTop());
		if ($(this).scrollTop() > 600) {
			$(".navbar").addClass("animate__animated animate__slideInDown");
			$(".gototop").addClass(
				"animate__animated animate__backInDown animate__slow"
			);
			$(".gototop").show();
			$(".navbar").css({
				position: "fixed",
				top: "0",
				"background-color": "#fff",
				"box-shadow": "2px 2px 7px #ccc"
			});
			$(".navbar-brand").css({ color: "#111" });
			$(".nav-item a").css({ color: "#111" });
			$("button.navbar-toggler i").css({ color: "#111" });
		} else {
			$(".navbar").removeClass("animate__animated animate__slideInDown");
			$(".gototop").hide();
			$(".gototop").removeClass(
				"animate__animated animate__backInDown animate__slow"
			);
			$(".navbar").css({
				position: "relative",
				width: "100%",
				"background-color": "transparent",
				"box-shadow": "none"
			});
			$(".navbar-brand").css({ color: "#fff" });
			$(".nav-item a").css({ color: "#fff" });
			$("button.navbar-toggler i").css({ color: "#fff" });
		}
		if ($(this).scrollTop() < 150) {
			$(".item-img").removeClass(
				"animate__animated animate__fadeIn animate__slow"
			);
			$(".img-fluid").removeClass(
				"animate__animated animate__rotateIn animate__slow"
			);
			$(".special-dish3").removeClass(
				"animate__animated animate__zoomIn animate__slow"
			);
			$(".special-dish2").removeClass(
				"animate__animated animate__zoomIn animate__slow"
			);
			$(".special-dish1").removeClass(
				"animate__animated animate__zoomIn animate__slow"
			);
			$(".plate-div").removeClass(
				"animate__animated animate__zoomIn animate__slow"
			);
			$(".cooking-img").removeClass(
				"animate__animated animate__zoomIn animate__slow"
			);
		}
	});

	$(".gototop").click(() => {
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});
});

$(".about").waypoint(
	function (direction) {
		$(".plate-div").addClass("animate__animated animate__zoomIn animate__slow");
		$(".cooking-img").addClass(
			"animate__animated animate__zoomIn animate__slow"
		);
	},
	{ offset: "50%" }
);

$(".special").waypoint(
	function () {
		$(".special-dish1").addClass(
			"animate__animated animate__zoomIn animate__slow"
		);
		$(".special-dish2").addClass(
			"animate__animated animate__zoomIn animate__slow"
		);
		$(".special-dish3").addClass(
			"animate__animated animate__zoomIn animate__slow"
		);
	},
	{ offset: "50%" }
);

$(".favorite").waypoint(
	function () {
		$(".img-fluid").addClass(
			"animate__animated animate__rotateIn animate__slow"
		);
	},
	{ offset: "50%" }
);

$(".menu").waypoint(
	function (direction) {
		$(".item-img").addClass("animate__animated animate__fadeIn animate__slow");
	},
	{ offset: "50%" }
);
