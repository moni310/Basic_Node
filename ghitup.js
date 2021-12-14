const express = require("express");
const app = express();
const axios = require("axios")
app.get("/git_users", (req, res) => {
	axios({
		url:" https://api.github.com/users "
	})
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});
app.listen(3000, () => {
	console.log("its working ---");
});

