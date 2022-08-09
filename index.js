
// const { v4 } = require('uuid');


const { app } = require("./build/local-server")

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
