$(document).ready((e) => {
	$(".deliveryFee").text("₹ 12");
	$(".gst").text("₹ 4");

	var amount = document.querySelectorAll(".amount");
	var cartQty = document.querySelectorAll(".cart-qty");
	window.sum = 0;
	for (var i = 0; i < amount.length; i++) {
		sum += Number(amount[i].innerText) * Number(cartQty[i].innerText);
	}
	sum += 16;
	console.log(sum);
	$(".total").text("₹ " + sum);

	console.log($(".cart-box").length);

	$(".payment").click(() => {
		console.log("clicked");
		let total_amount = sum;
		console.log(sum);
		$.ajax({
			type: "POST",
			url: "/payment",
			data: { total: sum },
			success: async (data) => {
				console.log(data);
				if (data.msg == "placed") {
					Swal.fire("Hurrah!", "Order Placed", "success");
					location.assign("/yourorders");
				} else {
					Swal.fire("Oops!", "Order Not Placed", "error");
				}
			}
		});
	});

	if ($(".cart-box").length == 0) {
		sum *= 0;
		$(".total").parent().remove();
		$(".deliveryFee").parent().remove();
		$(".gst").parent().remove();
		$(".btn-block").remove();
		$(".notfound").css({ display: "block" });
	}

	$(".add").click(function () {
		let name = $(this).parent().siblings(".cart-in").children().text();
		console.log(name);
		$.ajax({
			type: "POST",
			url: "/add",
			data: { name: name },
			success: (data) => {
				if (data.msg == "incremented") {
					let currentQty = Number($(this).siblings("span").text()) + 1;
					console.log(currentQty);
					$(this).siblings("span").text(currentQty);
					sum = 0;
					for (var i = 0; i < amount.length; i++) {
						sum += Number(amount[i].innerText) * Number(cartQty[i].innerText);
					}
					console.log(sum);
					$(".total").text("₹ " + sum);
				}
			}
		});
	});

	$(".minus").click(function (e) {
		let name = $(this).parent().siblings(".cart-in").children().text();
		console.log(name);
		$.ajax({
			type: "POST",
			url: "/minus",
			data: { name: name },
			success: async (data) => {
				if (data.msg == "decremented") {
					let currentQty = Number($(this).siblings("span").text()) - 1;
					$(this).siblings("span").text(currentQty);
					sum = 0;
					for (var i = 0; i < amount.length; i++) {
						sum += Number(amount[i].innerText) * Number(cartQty[i].innerText);
					}
					sum += 16;
					console.log(sum);
					$(".total").text("₹ " + sum);
				} else if (data.msg == "updated") {
					let parent = $(this).parent().parent().parent().parent();
					await parent.remove();
					location.reload();
				}
			}
		});
	});
});
