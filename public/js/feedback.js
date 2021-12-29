$(document).ready(() => {
	$("#loader").css({ display: "block" });
	setTimeout(() => {
		$("#loader").css({ display: "none" });
		$("#feedback").css({ display: "flex" });
	}, 1500);

	var outputArr = [];
	var questionArr = [];
	$(".question2").css({ display: "none" });
	$(".question3").css({ display: "none" });
	$(".question4").css({ display: "none" });
	$(".prev").css({ display: "none" });

	$(".btn-choice").click(function () {
		let review = $(this).parent().siblings().find(".opt-rev").text();
		let question = $(this)
			.parent()
			.parent()
			.siblings(".question")
			.find("span")
			.text();
		outputArr.push(review);
		questionArr.push(question);
		console.log($(this).parent().parent().parent().attr("class"));
		if ($(this).parent().parent().parent().attr("class") == "question1") {
			$(this).css({ "background-color": "#212121" });
			$(".question1").css({ display: "none" });
			$(".question3").css({ display: "none" });
			$(".question4").css({ display: "none" });
			$(".question2").css({ display: "block" });
			$(".prev").css({ display: "block" });
		} else if (
			$(this).parent().parent().parent().attr("class") == "question2"
		) {
			$(this).css({ "background-color": "#212121" });
			$(".question1").css({ display: "none" });
			$(".question2").css({ display: "none" });
			$(".question4").css({ display: "none" });
			$(".question3").css({ display: "block" });
			$(".prev").css({ display: "block" });
		} else if (
			$(this).parent().parent().parent().attr("class") == "question3"
		) {
			$(this).css({ "background-color": "#212121" });
			$(".question1").css({ display: "none" });
			$(".question2").css({ display: "none" });
			$(".question3").css({ display: "none" });
			$(".question4").css({ display: "block" });
			$(".prev").css({ display: "block" });
			$(".next").text("submit");
		} else if (
			$(this).parent().parent().parent().attr("class") == "question4"
		) {
			$(this).css({ "background-color": "#212121" });
			$(".question1").css({ display: "none" });
			$(".question2").css({ display: "none" });
			$(".question3").css({ display: "none" });
			$(".question4").css({ display: "block" });
			$(".prev").css({ display: "block" });
			console.log(outputArr);
			console.log(questionArr);
			$.ajax({
				type: "POST",
				url: "/feedback",
				data: {
					questions: questionArr,
					answers: outputArr
				},
				success: (data) => {
					console.log(data);
					if (data.msg == "saved") {
						Swal.fire("Hurrah!", "Successfully saved the feedback", "success");
						setTimeout(() => {
							location.assign("/");
						}, 2000);
					} else {
						Swal.fire("Oops!", "Please select proper options", "warning");
					}
				}
			});
		}
	});

	$(".next").click(function () {
		console.log($(this).parent().attr("class"));
		if ($(this).parent().attr("class") == "question1") {
			if (outputArr.length == 0) {
				Swal.fire("Oops!", "Please select", "warning");
			} else {
				$(".prev").css({ display: "none" });
				$(".question1").css({ display: "none" });
				$(".question3").css({ display: "none" });
				$(".question4").css({ display: "none" });
				$(".question2").css({ display: "block" });
				$(".prev").css({ display: "block" });
			}
		} else if ($(this).parent().attr("class") == "question2") {
			if (outputArr.length == 1) {
				Swal.fire("Oops!", "Please select", "warning");
			} else {
				$(".prev").css({ display: "none" });
				$(".question1").css({ display: "none" });
				$(".question2").css({ display: "none" });
				$(".question4").css({ display: "none" });
				$(".question3").css({ display: "block" });
				$(".prev").css({ display: "block" });
			}
		} else if ($(this).parent().attr("class") == "question3") {
			if (outputArr.length == 2) {
				Swal.fire("Oops!", "Please select", "warning");
			} else {
				$(".next").text("submit");
				$(".question1").css({ display: "none" });
				$(".question2").css({ display: "none" });
				$(".question3").css({ display: "none" });
				$(".question4").css({ display: "block" });
				$(".prev").css({ display: "block" });
			}
		} else if ($(this).parent().attr("class") == "question4") {
			if (outputArr.length == 3) {
				Swal.fire("Oops!", "Please select", "warning");
			} else {
				$(".question1").css({ display: "none" });
				$(".question2").css({ display: "none" });
				$(".question3").css({ display: "none" });
				$(".question4").css({ display: "block" });
				$(".prev").css({ display: "block" });
				console.log(outputArr);
				$.ajax({
					type: "POST",
					url: "/feedback",
					data: {
						questions: questionArr,
						answers: outputArr
					},
					success: (data) => {
						console.log(data);
						if (data.msg == "saved") {
							Swal.fire(
								"Hurrah!",
								"Successfully saved the feedback",
								"success"
							);
							setTimeout(() => {
								location.assign("/");
							}, 2000);
						} else {
							Swal.fire("Oops!", "Please select proper options", "warning");
						}
					}
				});
			}
		}
	});

	$(".prev").click(function () {
		console.log($(this).parent().attr("class"));
		if ($(this).parent().attr("class") == "question2") {
			$(".prev").css({ display: "none" });
			$(".question1").css({ display: "block" });
			$(".question2").css({ display: "none" });
			$(".question4").css({ display: "none" });
			$(".question3").css({ display: "none" });
		} else if ($(this).parent().attr("class") == "question3") {
			$(".prev").css({ display: "block" });
			$(".question1").css({ display: "none" });
			$(".question2").css({ display: "block" });
			$(".question3").css({ display: "none" });
			$(".question4").css({ display: "none" });
		} else if ($(this).parent().attr("class") == "question4") {
			$(".question1").css({ display: "none" });
			$(".question2").css({ display: "none" });
			$(".question3").css({ display: "block" });
			$(".question4").css({ display: "none" });
			$(".next").text("Next Question");
		}
	});

	console.log(outputArr);
});
