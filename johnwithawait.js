const express = require("express");
const app = express();
app.get('/moni', async (req, res) => {
	try {
	  const user = await("https://api.github.com/users/johnpapa")
	  res.json(user);
	} catch (e) {
		console.log("it is........")
	}
  })
app.listen(3000, () => {
	console.log("Server is working wait for sometime ---");
});