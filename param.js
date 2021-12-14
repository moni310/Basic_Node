const express = require("express");
const app = express();
const axios = require("axios")
app.get("/profile/:name", (req, res) => {
	axios({
		url: "https://api.github.com/users/"+req.params.name
	})
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});
app.listen(4000, () => {
	console.log("Server is working wait for sometime ---");
});