$(document).ready(() => {
	$("#loader").css({ display: "block" });
	setTimeout(() => {
		$("#loader").css({ display: "none" });
		$("#orders").css({ display: "block" });
	}, 1500);

	$(".genPdf").click(function (e) {
		var doc = new jsPDF();
		var name = $(this).siblings(".name");
		var amt = $(this).siblings(".amt");
		var qty = $(this).siblings(".qty");
		var total = $(this).siblings(".total");
		var delivery = $(this).siblings(".delivery");
		var gst = $(this).siblings(".gst");
		let end = 20;
		doc.text(20, end, "Invoices : ");
		doc.text(20, (end += 10), "");
		for (var i = 0; i < name.length; i++) {
			doc.setFontType("bold");
			doc.setTextColor(200, 35, 51);
			doc.setFontSize(12);
			doc.text(20, (end += 10), name[i].innerText);
			doc.setFontSize(10);
			doc.setFontType("normal");
			doc.setTextColor(0, 0, 0);
			doc.text(20, (end += 10), amt[i].innerText);
			doc.text(20, (end += 10), qty[i].innerText);
			doc.text(20, (end += 10), "");
			console.log(end);
		}
		doc.text(20, (end += 10), gst.text());
		doc.text(20, (end += 10), delivery.text());
		doc.text(20, (end += 10), total.text());
		doc.save("a4.pdf");
	});
});
