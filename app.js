const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { authenticate } = require("passport");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
let search = "";

app.use(
	session({
		secret: "Our little secret.",
		resave: false,
		saveUninitialized: false,
		cookie: { _expires: 900000000000000 }
	})
);

app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect("mongodb://localhost:27017/orderDB");
mongoose.connect(
	"mongodb+srv://admin-noobie:Test123@cluster0.gkznc.mongodb.net/orderDB"
);

const clientSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true
	},
	password: {
		type: String
	},
	yourCarts: {
		type: Array
	},
	yourOrders: {
		type: Array
	},
	favorites: {
		type: Array
	},
	choices: {
		type: Array
	}
});

const foodSchema = new mongoose.Schema({
	name: String,
	description: String,
	amount: Number,
	image: String
});

const cartSchema = new mongoose.Schema({
	name: String,
	description: String,
	amount: String,
	image: String
});

const contactSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	email: String,
	message: String
});

const feedbackSchema = new mongoose.Schema({
	questions: {
		type: Array
	},
	answers: {
		type: Array
	}
});

const choiceArr = [
	{
		name: "Black Forest",
		description:
			"several layers of chocolate sponge cake sandwiched with whipped cream and cherries.",
		amount: 450,
		image: "blackforest.jpg",
		like: "far fa-heart"
	},
	{
		name: "Choco Truffle",
		description:
			"This Chocolate Truffle Cake is dense, moist, and ultra chocolatey.",
		amount: 430,
		image: "chocotruffle.jpg",
		like: "far fa-heart"
	},
	{
		name: "Sweet Chocolate",
		description:
			"The cake should rise completely and should not look like a batter.",
		amount: 500,
		image: "sweetchocolate.jpg",
		like: "far fa-heart"
	},
	{
		name: "Red Velvet",
		description:
			"Red, red-brown, crimson, or scarlet-colored chocolate layer cake, layered with ermine icing.",
		amount: 400,
		image: "redvelvet.jpg",
		like: "far fa-heart"
	},
	{
		name: "Raspberry Roll",
		description:
			"An impressive rolled cake filled with raspberry jam and raspberry whipped cream and decorated with more whipped cream and fresh raspberries.",
		amount: 450,
		image: "raspberry.jpg",
		like: "far fa-heart"
	},
	{
		name: "Blueberry",
		description: "Fresh blueberries are a popular summer treat.",
		amount: 550,
		image: "blueberry.jpg",
		like: "far fa-heart"
	},
	{
		name: "White Bread",
		description:
			"Our bread provides energy for daily living. Carbohydrates are an important part of our diet as they provide us with energy.",
		amount: 50,
		image: "whitebread.jpg",
		like: "far fa-heart"
	},
	{
		name: "Multigrain Bread",
		description:
			"Bread prepared with two or more types of grain. Grains used include barley, flax, millet, oats, wheat, and whole-wheat flour, among others.",
		amount: 60,
		image: "multigrainbread.jpg",
		like: "far fa-heart"
	},
	{
		name: "Rye Bread",
		description: "Bread made with various proportions of flour from rye grain.",
		amount: 80,
		image: "ryebread.jpg",
		like: "far fa-heart"
	},
	{
		name: "Wheat Bread",
		description:
			"Bread is made up of wheat kernels that still contain all three components—the bran, germ and endosperm of the kernel.",
		amount: 30,
		image: "wheatbread.jpg",
		like: "far fa-heart"
	},
	{
		name: "Sourdough",
		description:
			"Sourdough is naturally leavened bread, which means it doesn't use commercial yeast to rise.",
		amount: 40,
		image: "sourdough.jpg",
		like: "far fa-heart"
	},
	{
		name: "Loaf Bread",
		description:
			"Loaf of bread - a shaped mass of baked bread that is usually sliced before eating.",
		amount: 100,
		image: "loafbread.jpg",
		like: "far fa-heart"
	},
	{
		name: "Chocolate Doughnut",
		description:
			"Chocolate glazed donuts are made from a thick chocolate cake batter.",
		amount: 60,
		image: "chocolatedonut.jpg",
		like: "far fa-heart"
	},
	{
		name: "Vannila Doughnut",
		description:
			"Vanilla Glazed Baked Donuts: soft and delicious baked donuts, dipped in a thick vanilla glaze and topped with sprinkles.",
		amount: 50,
		image: "vanniladonut.jpg",
		like: "far fa-heart"
	},
	{
		name: "Oreo Doughnut",
		description:
			"Dipped in dark chocolate icing and topped with OREO cookie pieces. ",
		amount: 90,
		image: "oreodonut.jpg",
		like: "far fa-heart"
	},
	{
		name: "Strawberry Doughnut",
		description:
			"baked strawberry donuts are speckled with fresh bits of strawberry, topped with a strawberry glaze, and finished with a drizzle of cream cheese frosting.",
		amount: 60,
		image: "strawberrydonut.jpg",
		like: "far fa-heart"
	},
	{
		name: "Jelly Doughnut",
		description:
			"Krapfen that is typically filled with apricot jam and topped with powdered sugar.",
		amount: 40,
		image: "jellydonut.jpg",
		like: "far fa-heart"
	},
	{
		name: "Blueberry Doughnut",
		description:
			"Baked blueberry donuts are bakery quality donuts that are packed with fresh blueberries and topped with a sugary glaze.",
		amount: 100,
		image: "blueberrydonut.jpg",
		like: "far fa-heart"
	},
	{
		name: "Chocochip Cookie",
		description:
			"Baked or cooked snack or dessert that is typically small, flat and sweet.",
		amount: 50,
		image: "chocochipcookie.jpg",
		like: "far fa-heart"
	},
	{
		name: "Macaroons",
		description:
			"Meringue-based sandwich cookie made with almond flour, egg whites, confectioners' sugar, and food coloring.",
		amount: 120,
		image: "macaroonscookie.jpg",
		like: "far fa-heart"
	},
	{
		name: "Peanut Butter Cookie",
		description: "Having peanut butter as a principal ingredient.",
		amount: 60,
		image: "peanutbuttercookie.jpg",
		like: "far fa-heart"
	},
	{
		name: "Fortune Cookie",
		description:
			"The mixture for our recipe is very similar to a French tuiles biscuit base, and is made up of butter, sugar, eggs and flour, as well as a little vanilla flavouring.",
		amount: 100,
		image: "fortunecookie.jpg",
		like: "far fa-heart"
	},
	{
		name: "Oatmeal Cookie",
		description:
			"Drop cookie made from an oatmeal-based dough with raisins. Its ingredients also typically include flour, sugar, eggs, salt, and spices.",
		amount: 80,
		image: "oatmealcookie.jpg",
		like: "far fa-heart"
	},
	{
		name: "Sugar Cookie",
		description: "Sugar is responsible for much more than the cookies.",
		amount: 40,
		image: "sugarcookie.jpg",
		like: "far fa-heart"
	},
	{
		name: "Burger",
		description:
			"Cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun.",
		amount: 120,
		image: "otherburger.jpg",
		like: "far fa-heart"
	},
	{
		name: "Pizza",
		description:
			"Your taste buds are the primary factor in what makes pizza special. Along with sweet, salty, sour and bitter, there is a fifth taste called umami.",
		amount: 160,
		image: "otherpizza.jpg",
		like: "far fa-heart"
	},
	{
		name: "Sandwitch",
		description:
			"Vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
		amount: 70,
		image: "othersandwitch.jpg",
		like: "far fa-heart"
	},
	{
		name: "French Fries",
		description:
			"Fried and frozen, Imahara discovers that they do come from real potatoes.",
		amount: 50,
		image: "otherfrench.jpg",
		like: "far fa-heart"
	},
	{
		name: "Samosa",
		description:
			"Baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, peas, chicken and/or other meats.",
		amount: 30,
		image: "othersamosa.jpg",
		like: "far fa-heart"
	},
	{
		name: "Puppz",
		description:
			"Specially formulated blend of quality vegetable oils, developed to create an excellent elastic texture, smooth consistency and ease of use at ambient temperature.",
		amount: 20,
		image: "otherpuppz.jpg",
		like: "far fa-heart"
	}
];

foodSchema.index({ name: "text" });
clientSchema.plugin(passportLocalMongoose);

const Client = mongoose.model("Client", clientSchema);
const Food = mongoose.model("Food", foodSchema);
const Contact = mongoose.model("Contact", contactSchema);
const Feedback = mongoose.model("Feedback", feedbackSchema);

passport.use(Client.createStrategy());
passport.serializeUser(Client.serializeUser());
passport.deserializeUser(Client.deserializeUser());

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/register", (req, res) => {
	res.render("register");
});

app.get("/login", (req, res) => {
	res.render("login");
});

app.get("/order", async (req, res) => {
	if (req.isAuthenticated()) {
		await console.log(req.user._id);
		console.log(search);
		if (search == "") {
			Client.findOne({ _id: req.user._id }, (err, foundData) => {
				if (foundData) {
					res.render("order", {
						orderArr: foundData.choices,
						userId: req.user._id
					});
				}
			});
		} else {
			Client.findOne({ _id: req.user._id }, (err, foundData) => {
				console.log(foundData);
				if (foundData) {
					var choices = foundData.choices;
					var newArr = choices.filter((str) => {
						var name = str.name;
						name = name.toLowerCase();
						return name.includes(search.toLowerCase());
					});
					console.log(newArr);
					if (newArr.length == 0) {
						var someArray = [
							{
								name: "No Data Found",
								description: "404 Search",
								amount: 0,
								image: "404.png",
								like: "fas fa-exclamation",
								class: "d-none",
								class2: "d-block"
							}
						];
						res.render("order", { orderArr: someArray });
					} else {
						res.render("order", {
							orderArr: newArr
						});
					}
				} else {
					res.send({ msg: "nodata" });
				}
			});
		}
	} else {
		res.redirect("/login");
	}
});

app.get("/cart", async (req, res) => {
	if (req.isAuthenticated()) {
		await console.log(req.user._id);
		Client.findOne({ _id: req.user._id }, (err, foundData) => {
			if (foundData) {
				res.render("cart", { cartItems: foundData.yourCarts });
			}
		});
	}
});

app.get("/account", async (req, res) => {
	if (req.isAuthenticated()) {
		await console.log(req.user._id);
		await console.log(req.user.username);
		Client.findOne({ _id: req.user._id }, (err, foundData) => {
			if (foundData) {
				res.render("account", { accountDetails: foundData });
			}
		});
	}
});

app.get("/yourorders", async (req, res) => {
	if (req.isAuthenticated()) {
		await console.log(req.user._id);
		Client.findOne({ _id: req.user._id }, (err, foundData) => {
			if (foundData) {
				res.render("yourorders", { orders: foundData.yourOrders });
			}
		});
	}
});

app.get("/yourfavorites", async (req, res) => {
	if (req.isAuthenticated()) {
		await console.log(req.user._id);
		Client.findOne({ _id: req.user._id }, (err, foundData) => {
			if (foundData) {
				res.render("yourfavorites", { favorites: foundData.favorites });
			}
		});
	}
});

app.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/login");
});

app.get("/delete", async (req, res) => {
	await console.log(req.user._id);
	Client.findOneAndDelete({ _id: req.user._id }, (err) => {
		if (!err) {
			res.redirect("/register");
		} else {
			console.log(err);
		}
	});
});

app.get("/contactmap", (req, res) => {
	res.render("contactmap");
});

app.get("/feedback", (req, res) => {
	res.render("feedback");
});

app.post("/register", (req, res) => {
	Client.register(
		{ username: req.body.username, choices: choiceArr },
		req.body.password,
		(err) => {
			if (err) {
				res.send({ msg: "notauth" });
			} else {
				passport.authenticate("local")(req, res, () => {
					res.send({ msg: "auth", user: req.body.username });
				});
			}
		}
	);
});

app.post("/login", (req, res) => {
	console.log(req.body);
	const client = new Client({
		username: req.body.username,
		password: req.body.password
	});

	req.login(client, (err) => {
		Client.findOne({ username: req.body.username }, (err, foundClient) => {
			if (foundClient) {
				auth = true;
				var result;
				passport.authenticate("local")(req, res, () => {
					res.send({ msg: "auth", user: req.body.username });
				});
			} else {
				auth = false;
				res.send({ msg: "noauth" });
			}
		});
	});
});

app.post("/order", (req, res) => {
	const cart = {
		name: req.body.name,
		description: req.body.description,
		amount: req.body.amount,
		image: req.body.image,
		quantity: 1
	};

	Client.findOne(
		{ "yourCarts.name": req.body.name },
		async (err, foundData) => {
			await console.log(req.user._id);
			if (foundData == null) {
				Client.findOneAndUpdate(
					{ _id: req.user._id },
					{ $push: { yourCarts: cart } },
					(err) => {
						if (!err) {
							Client.findOne({ _id: req.user._id }, async (err, foundData) => {
								if (foundData) {
									let items = foundData.yourCarts;
									res.send({ cart: items, msg: "pushed" });
								}
							});
						} else {
							res.send({ msg: "notpushed" });
						}
					}
				);
			} else {
				Client.updateOne(
					{ _id: req.user._id, "yourCarts.name": req.body.name },
					{ $inc: { "yourCarts.$.quantity": 1 } },
					(err) => {
						if (!err) {
							Client.findOne({ _id: req.user._id }, async (err, foundData) => {
								if (foundData) {
									let items = foundData.yourCarts;
									res.send({ cart: items, msg: "incremented" });
								}
							});
						}
					}
				);
			}
		}
	);
});

app.post("/search", (req, res) => {
	console.log(req.body);
	search = req.body.search;
	if (req.body.search == "") {
		res.send({ msg: "no" });
	} else {
		res.send({ msg: "yes" });
	}
});

app.post("/add", async (req, res) => {
	await console.log(req.user._id);
	console.log(req.body);
	Client.updateOne(
		{ _id: req.user._id, "yourCarts.name": req.body.name },
		{ $inc: { "yourCarts.$.quantity": 1 } },
		(err) => {
			if (!err) {
				res.send({ msg: "incremented" });
			} else {
				res.send({ msg: "notincremented" });
			}
		}
	);
});

app.post("/minus", async (req, res) => {
	await console.log(req.user._id);

	Client.findOne(
		{
			_id: req.user._id,
			yourCarts: { $elemMatch: { name: req.body.name, quantity: { $lte: 1 } } }
		},
		async (err, foundData) => {
			if (foundData == null) {
				console.log(req.body);
				Client.updateOne(
					{
						_id: req.user._id,
						yourCarts: {
							$elemMatch: { name: req.body.name, quantity: { $gte: 2 } }
						}
					},
					{ $inc: { "yourCarts.$.quantity": -1 } },
					(err) => {
						if (!err) {
							res.send({ msg: "decremented" });
						} else {
							res.send({ msg: "notdecremented" });
						}
					}
				);
			} else {
				Client.findOneAndUpdate(
					{
						_id: req.user._id,
						yourCarts: {
							$elemMatch: { name: req.body.name, quantity: { $lte: 1 } }
						}
					},
					{ $pull: { yourCarts: { name: req.body.name } } },
					(err) => {
						if (err) {
							res.send({ msg: "notupdated" });
						} else {
							res.send({ msg: "updated" });
						}
					}
				);
			}
		}
	);
});

app.post("/payment", async (req, res) => {
	await console.log(req.user._id);
	Client.findOne({ _id: req.user._id }, (err, foundData) => {
		if (foundData) {
			console.log(req.body.total);
			let orderObj = {
				items: foundData.yourCarts,
				total: req.body.total
			};

			console.log(orderObj);

			Client.findOneAndUpdate(
				{ _id: req.user._id },
				{ $push: { yourOrders: orderObj } },
				(err) => {
					if (!err) {
						res.send({ msg: "placed" });
					} else {
						res.send({ msg: "notplaced" });
					}
				}
			);
		}
	});
});

app.post("/likes", (req, res) => {
	console.log(req.body);
	Client.findOneAndUpdate(
		{
			_id: req.user._id,
			choices: {
				$elemMatch: { name: req.body.name }
			}
		},
		{ $set: { "choices.$.like": "fas fa-heart" } },
		(err) => {
			if (err) {
				console.log("not liked");
				res.send({ msg: "notliked" });
			} else {
				console.log("liked");
				res.send({ msg: "liked" });
			}
		}
	);
});

app.post("/dislikes", (req, res) => {
	console.log(req.body);
	Client.findOneAndUpdate(
		{
			_id: req.user._id,
			choices: {
				$elemMatch: { name: req.body.name }
			}
		},
		{ $set: { "choices.$.like": "far fa-heart" } },
		(err) => {
			if (err) {
				console.log("not disliked");
				res.send({ msg: "notdisliked" });
			} else {
				console.log("disliked");
				res.send({ msg: "disliked" });
			}
		}
	);
});

app.post("/favorite", (req, res) => {
	console.log(req.body);
	console.log(req.user._id);

	let orderObj = {
		name: req.body.name,
		description: req.body.description,
		amount: req.body.amount,
		imageURL: req.body.imageURL
	};

	console.log(orderObj);

	Client.findOneAndUpdate(
		{ _id: req.user._id },
		{ $push: { favorites: orderObj } },
		(err) => {
			if (!err) {
				res.send({ msg: "inserted" });
			} else {
				res.send({ msg: "notinserted" });
			}
		}
	);
});

app.post("/unfavorite", (req, res) => {
	console.log(req.body);
	console.log(req.user._id);

	Client.findOneAndUpdate(
		{ _id: req.user._id },
		{ $pull: { favorites: { name: req.body.name } } },
		(err) => {
			if (!err) {
				res.send({ msg: "removed" });
			} else {
				res.send({ msg: "notremoved" });
			}
		}
	);
});

app.post("/contactmap", (req, res) => {
	console.log(req.body);
	const contact = new Contact({
		firstname: req.body.firstName,
		lastname: req.body.lastName,
		email: req.body.email,
		message: req.body.message
	});

	contact.save((err) => {
		if (!err) {
			res.send({ msg: "saved" });
		} else {
			res.send({ msg: "notsaved" });
		}
	});
});

app.post("/feedback", async (req, res) => {
	console.log(req.body);
	const feedback = new Feedback({
		questions: req.body.questions,
		answers: req.body.answers
	});
	feedback.save((err) => {
		if (!err) {
			res.send({ msg: "saved" });
		} else {
			res.send({ msg: "notsaved" });
		}
	});
});

app.listen(process.env.PORT || 3000, () =>
	console.log("Server started on port")
);
