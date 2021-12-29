$(document).ready(() => {
	$("#loader").css({ display: "block" });
	setTimeout(() => {
		$("#loader").css({ display: "none" });
		$("#register").css({ display: "block" });
	}, 1500);

	$("#username").keypress((event) => {
		var char = String.fromCharCode(event.which);
		if (!/[a-zA-Z0-9@. ]/.test(char)) {
			event.preventDefault();
		}
	});

	$("#submit").click(function (e) {
		e.preventDefault();
		let usrname = $("#username").val();
		let passwd = $("#password").val();
		if (usrname == "") {
			alert("failed");
		} else if (passwd == "") {
			alert("failed");
		} else if (passwd.length < 6) {
			alert("failed");
		} else {
			$.ajax({
				type: "POST",
				url: "/register",
				data: { username: usrname, password: passwd },
				success: function (data) {
					console.log(data);
					if (data.msg == "auth") {
						location.assign("/order");
					} else {
						alert("username already exist");
					}
				}
			});
		}
	});
});

$(".eye").click(() => {
	$(".eye").find("i").toggleClass("far fa-eye");
	$(".eye").find("i").toggleClass("far fa-eye-slash");

	let eye = $(".eye").find("i").attr("class");
	console.log(eye);
	if (eye == "far fa-eye-slash") {
		$("#password").attr("type", "text");
	} else if (eye == "fa-eye far") {
		$("#password").attr("type", "password");
	}
});
