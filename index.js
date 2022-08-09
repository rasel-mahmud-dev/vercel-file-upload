const express = require('express');


const app = express();
app.use(express.static('public'))


const routes = require("./routes")

routes(app)

app.get('/', (req, res) => {
	res.send("/Home ed")
})



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
