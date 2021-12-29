$(document).ready(() => {
	$("#loader").css({ display: "block" });
	setTimeout(() => {
		$("#loader").css({ display: "none" });
		$("#map").css({ display: "flex" });
	}, 1500);

	$("#email").keypress((event) => {
		var char = String.fromCharCode(event.which);
		if (!/[a-zA-Z0-9@.]/.test(char)) {
			event.preventDefault();
		}
	});

	$("#firstname").keypress((event) => {
		var char = String.fromCharCode(event.which);
		if (!/[a-zA-Z ]/.test(char)) {
			event.preventDefault();
		}
	});

	$("#lastname").keypress((event) => {
		var char = String.fromCharCode(event.which);
		if (!/[a-zA-Z ]/.test(char)) {
			event.preventDefault();
		}
	});

	$("#message").keypress((e) => {
		if (e.keyCode == 13) {
			let firstName = $("#firstname").val();
			let lastName = $("#lastname").val();
			let email = $("#email").val();
			let message = $("#message").val();

			if (firstName == "") {
				Swal.fire("Oops", "FristName cannot be empty", "warning");
			} else if (email == "") {
				Swal.fire("Oops", "Email cannot be empty", "warning");
			} else if (message == "") {
				Swal.fire("Oops", "Drop Us A Line", "warning");
			} else {
				$.ajax({
					type: "POST",
					url: "/contactmap",
					data: {
						firstName: firstName,
						lastName: lastName,
						email: email,
						message: message
					},
					success: (data) => {
						if (data.msg == "saved") {
							Swal.fire("Hurrah", "Successfully saved your contact", "success");
						}
						console.log(data);
						$("#firstname").val("");
						$("#lastname").val("");
						$("#email").val("");
						$("#message").val("");
					}
				});
			}
		}
	});
});
