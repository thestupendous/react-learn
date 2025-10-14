const user = {
	username: "hitesh",
	price: 912,

	welcomeMessage: function() {
		console.log(`${this.username}, welcome to the website`);
	}
}
user.welcomeMessage()
user.username = "Somvaar"
user.welcomeMessage()
