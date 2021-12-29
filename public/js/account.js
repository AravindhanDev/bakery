$(document).ready(() => {
	$("#loader").css({ display: "block" });
	setTimeout(() => {
		$("#loader").css({ display: "none" });
		$("#account").css({ display: "flex" });
	}, 1500);
});
