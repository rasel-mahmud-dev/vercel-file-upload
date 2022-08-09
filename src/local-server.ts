import express from 'express';
import dotenv from "dotenv"

export const app = express();
app.use(express.static('public'))

require('dotenv').config()

import routes from "./routes"

routes(app)

app.get('/', (req, res) => {
	res.send("/Home ed")
})



// //?? comment two line when deploy on vercel...
// if(process.env.NODE_ENV === "development") {
// 	const port = process.env.PORT || 3000;
// 	app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
// }


