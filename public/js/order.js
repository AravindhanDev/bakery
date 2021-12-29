$(document).ready(() => {
	// $("#loader").css({ display: "block" });
	setTimeout(() => {
		// $("#loader").css({ display: "none" });
		$(".order-container").css({ display: "block" });
	}, 1500);

	$("#search").keypress((event) => {
		var char = String.fromCharCode(event.which);
		if (!/[a-zA-Z ]/.test(char)) {
			event.preventDefault();
		}
	});

	// $("#search").on("keyup", function (event) {
	// 	let value = $("#search").val();
	// 	console.log(value);
	// 	if (event.keyCode == 13) {
	// 		console.log("Enter");
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "/search",
	// 			data: { search: value },
	// 			success: (data) => {
	// 				console.log(data);
	// 				if (data.msg == "yes") {
	// 					// location.assign("/order");
	// 					$("#main").load(" #main > *");
	// 				} else {
	// 					$("#main").load(" #main > *");
	// 					// location.assign("/order");
	// 				}
	// 			}
	// 		});
	// 	} else {
	// 		console.log("Not Enter");
	// 	}
	// });

	// $("#search").keyup((event) => {
	// 	let value = $("#search").val();
	// 	console.log(value);
	// 	if (event.keyCode == 13) {
	// 		console.log("Enter");
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "/search",
	// 			data: { search: value },
	// 			success: (data) => {
	// 				console.log(data);
	// 				if (data.msg == "yes") {
	// 					// location.assign("/order");
	// 					$("#main").load(" #main > *");
	// 				} else {
	// 					$("#main").load(" #main > *");
	// 					// location.assign("/order");
	// 				}
	// 			}
	// 		});
	// 	} else {
	// 		console.log("Not Enter");
	// 	}
	// });

	$("#search").on("keyup", function (event) {
		let value = $("#search").val();
		$.ajax({
			type: "POST",
			url: "/search",
			data: { search: value },
			success: (data) => {
				console.log(data);
				if (data.msg == "yes") {
					$("#main").load(" #main > *");
				} else {
					$("#main").load(" #main > *");
				}
			}
		});
	});

	$("body").on("click", ".like", function (e) {
		if (
			$(this).hasClass("far fa-heart like") ||
			$(this).hasClass("like far fa-heart")
		) {
			console.log("liked");
			$(this).addClass("animate__animated animate__hinge");
			console.log("inside liked");
			let name = $(this).parent().siblings(".top").find("span").text();
			let description = $(this).parent().siblings(".top").find("p").text();
			let imageURL = $(this).parent().siblings(".top").find("img").attr("src");
			imageURL = imageURL.replace("../images/", "");
			let amount = $(this).parent().siblings(".bottom").find("p").text();
			amount = amount.replace("₹ ", "");

			console.log(name, description, imageURL, amount);
			var audio = new Audio("../audio/facebook.mp3");
			audio.play();
			$.ajax({
				type: "POST",
				url: "/likes",
				data: {
					name: name,
					state: "fas fa-heart"
				},
				success: (data) => {
					console.log(data);
					if (data.msg == "liked") {
						$(e.currentTarget).removeClass("fas fa-heart");
						$(e.currentTarget).removeClass("far fa-heart");
						$(e.currentTarget).addClass("fas fa-heart");
					}
				}
			});

			$.ajax({
				type: "POST",
				url: "/favorite",
				data: {
					name: name,
					description: description,
					imageURL: imageURL,
					amount: amount
				},
				success: (data) => {
					console.log(data);
					setTimeout(() => {
						$(e.currentTarget).removeClass("animate__animated animate__hinge");
					}, 2500);
				}
			});
		} else if (
			$(this).hasClass("like fas fa-heart") ||
			$(this).hasClass("fas fa-heart like")
		) {
			console.log("inside disliked");
			let name = $(this).parent().siblings(".top").find("span").text();
			let description = $(this).parent().siblings(".top").find("p").text();
			let imageURL = $(this).parent().siblings(".top").find("img").attr("src");
			imageURL = imageURL.replace("../images/", "");
			let amount = $(this).parent().siblings(".bottom").find("p").text();
			amount = amount.replace("₹ ", "");

			console.log(name, description, imageURL, amount);

			$.ajax({
				type: "POST",
				url: "/dislikes",
				data: {
					name: name,
					state: "far fa-heart"
				},
				success: (data) => {
					console.log(data);
					if (data.msg == "disliked") {
						$(e.currentTarget).removeClass("far fa-heart");
						$(e.currentTarget).removeClass("fas fa-heart");
						$(e.currentTarget).addClass("far fa-heart");
					}
				}
			});

			$.ajax({
				type: "POST",
				url: "/unfavorite",
				data: {
					name: name,
					description: description,
					imageURL: imageURL,
					amount: amount
				},
				success: (data) => {
					console.log(data);
				}
			});
		}
	});

	$("body").on("click", ".btn-action", function (e) {
		window.current = $(this);
		let name = $(this).parent().siblings().find("span").text();
		let description = $(this).parent().siblings().find("p").text();
		let amount = $(this).siblings().text();
		amount = amount.replace("₹ ", "");
		let image = $(this).parent().siblings().find("img").attr("src");
		image = image.replace("../images/", "");
		console.log(name, description, amount, image);

		$.ajax({
			type: "POST",
			url: "/order",
			data: {
				name: name,
				description: description,
				amount: amount,
				image: image
			},
			success: async function (data) {
				console.log(data.cart.length);
				if (data.msg == "pushed") {
					$("#carting").html(`
					<div class="alert alert-danger" role="alert">
						<a href="/cart"
							>view cart &nbsp; &nbsp;&nbsp;&nbsp;
							<ion-icon name="bag-handle-outline"></ion-icon>
							<span class="cart-amt"></span
						></a>
					</div>`);
					$(e.currentTarget).html(`<i class="fas fa-check"></i> ADDED`);
					$(e.currentTarget).css({
						"background-color": "#f54748",
						color: "#fff"
					});
					$(".cart-amt").text(data.cart.length);
				} else {
					$("#carting").html(`
					<div class="alert alert-danger" role="alert">
						<a href="/cart"
							>view cart &nbsp; &nbsp;&nbsp;&nbsp;
							<ion-icon name="bag-handle-outline"></ion-icon>
							<span class="cart-amt"></span
						></a>
					</div>`);
					$(e.currentTarget).html(`<i class="fas fa-check"></i> ADDED`);
					$(e.currentTarget).css({
						"background-color": "#f54748",
						color: "#fff"
					});
					$(".cart-amt").text(data.cart.length);
				}
			}
		});
	});

	$(".btn-action").click(function (e) {
		window.current = $(this);
		let name = $(this).parent().siblings().find("span").text();
		let description = $(this).parent().siblings().find("p").text();
		let amount = $(this).siblings().text();
		amount = amount.replace("₹ ", "");
		let image = $(this).parent().siblings().find("img").attr("src");
		image = image.replace("../images/", "");
		console.log(name, description, amount, image);

		$.ajax({
			type: "POST",
			url: "/order",
			data: {
				name: name,
				description: description,
				amount: amount,
				image: image
			},
			success: async function (data) {
				console.log(data.cart.length);
				if (data.msg == "pushed") {
					$("#carting").html(`
					<div class="alert alert-danger" role="alert">
						<a href="/cart"
							>view cart &nbsp; &nbsp;&nbsp;&nbsp;
							<ion-icon name="bag-handle-outline"></ion-icon>
							<span class="cart-amt"></span
						></a>
					</div>`);
					$(e.currentTarget).html(`<i class="fas fa-check"></i> ADDED`);
					$(e.currentTarget).css({
						"background-color": "#f54748",
						color: "#fff"
					});
					$(".cart-amt").text(data.cart.length);
				} else {
					$("#carting").html(`
					<div class="alert alert-danger" role="alert">
						<a href="/cart"
							>view cart &nbsp; &nbsp;&nbsp;&nbsp;
							<ion-icon name="bag-handle-outline"></ion-icon>
							<span class="cart-amt"></span
						></a>
					</div>`);
					$(e.currentTarget).html(`<i class="fas fa-check"></i> ADDED`);
					$(e.currentTarget).css({
						"background-color": "#f54748",
						color: "#fff"
					});
					$(".cart-amt").text(data.cart.length);
				}
			}
		});
	});
});
