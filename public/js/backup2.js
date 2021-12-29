var quizArr = [
	[
		{
			review: "myreview0",
			imageURL: "image0.jpg",
			choice: 0,
			answer: 2
		},
		{
			review: "myreview1",
			imageURL: "image1.jpg",
			choice: 1,
			answer: 2
		},
		{
			review: "myreview2",
			imageURL: "image2.jpg",
			choice: 2,
			answer: 2
		},
		{
			review: "myreview3",
			imageURL: "image3.jpg",
			choice: 3,
			answer: 2
		}
	],
	[
		{
			review: "myreview0",
			imageURL: "image0.jpg",
			choice: 0,
			answer: 1
		},
		{
			review: "myreview1",
			imageURL: "image1.jpg",
			choice: 1,
			answer: 1
		},
		{
			review: "myreview2",
			imageURL: "image2.jpg",
			choice: 2,
			answer: 1
		},
		{
			review: "myreview3",
			imageURL: "image3.jpg",
			choice: 3,
			answer: 1
		}
	],
	[
		{
			review: "myreview0",
			imageURL: "image0.jpg",
			choice: 0,
			answer: 0
		},
		{
			review: "myreview1",
			imageURL: "image1.jpg",
			choice: 1,
			answer: 0
		},
		{
			review: "myreview2",
			imageURL: "image2.jpg",
			choice: 2,
			answer: 0
		},
		{
			review: "myreview3",
			imageURL: "image3.jpg",
			choice: 3,
			answer: 0
		}
	],
	[
		{
			review: "myreview0",
			imageURL: "image0.jpg",
			choice: 0,
			answer: 3
		},
		{
			review: "myreview1",
			imageURL: "image1.jpg",
			choice: 1,
			answer: 3
		},
		{
			review: "myreview2",
			imageURL: "image2.jpg",
			choice: 2,
			answer: 3
		},
		{
			review: "myreview3",
			imageURL: "image3.jpg",
			choice: 3,
			answer: 3
		}
	],
	[
		{
			review: "myreview0",
			imageURL: "image0.jpg",
			choice: 0,
			answer: 2
		},
		{
			review: "myreview1",
			imageURL: "image1.jpg",
			choice: 1,
			answer: 2
		},
		{
			review: "myreview2",
			imageURL: "image2.jpg",
			choice: 2,
			answer: 2
		},
		{
			review: "myreview3",
			imageURL: "image3.jpg",
			choice: 3,
			answer: 2
		}
	]
];

function one() {
	for (var i = 0; i < 1; i++) {
		var len = quizArr[i].length;
		for (var j = 0; j < len; j++) {
			console.log(quizArr[i][j].review);
			console.log(quizArr[i][j].imageURL);
			console.log(quizArr[i][j].choice);
			console.log(quizArr[i][j].answer);
		}
	}
}

function two() {
	for (var i = 1; i < 2; i++) {
		var len = quizArr[i].length;
		for (var j = 0; j < len; j++) {
			console.log(quizArr[i][j].review);
			console.log(quizArr[i][j].imageURL);
			console.log(quizArr[i][j].choice);
			console.log(quizArr[i][j].answer);
		}
	}
}

function three() {
	for (var i = 2; i < 3; i++) {
		var len = quizArr[i].length;
		for (var j = 0; j < len; j++) {
			console.log(quizArr[i][j].review);
			console.log(quizArr[i][j].imageURL);
			console.log(quizArr[i][j].choice);
			console.log(quizArr[i][j].answer);
		}
	}
}

function four() {
	for (var i = 3; i < 4; i++) {
		var len = quizArr[i].length;
		for (var j = 0; j < len; j++) {
			console.log(quizArr[i][j].review);
			console.log(quizArr[i][j].imageURL);
			console.log(quizArr[i][j].choice);
			console.log(quizArr[i][j].answer);
		}
	}
}

function five() {
	for (var i = 4; i < 5; i++) {
		var len = quizArr[i].length;
		for (var j = 0; j < len; j++) {
			console.log(quizArr[i][j].review);
			console.log(quizArr[i][j].imageURL);
			console.log(quizArr[i][j].choice);
			console.log(quizArr[i][j].answer);
		}
	}
}

one();
two();
three();
four();
five();
