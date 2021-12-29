$(document).ready(() => {
	$("#loader").css({ display: "block" });
	setTimeout(() => {
		$("#loader").css({ display: "none" });
		$("#login").css({ display: "block" });
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
		$.ajax({
			type: "POST",
			url: "/login",
			data: { username: usrname, password: passwd },
			success: async function (data) {
				console.log(data);
				if (data.msg == "auth") {
					location.assign("/order");
				} else if (data.msg == "noauth") {
					Swal.fire("Oops", "Username Doesn't exist", "warning");
				} else if (data.msg == "unauth") {
					Swal.fire("Oops", "Incorrect Password", "warning");
				}
			}
		});
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
