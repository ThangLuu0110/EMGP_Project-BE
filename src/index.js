const express = require('express');
const app = express();
const port = process.env.PORT_SERVER || 3001;
const initAPIRoute = require('./routes/api')

//config request body parser
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

initAPIRoute(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
