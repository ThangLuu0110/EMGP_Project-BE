const express = require('express');
const app = express();
const port = process.env.PORT_SERVER || 3001;
const initAPIRoute = require('./routes/api')
const cors = require('cors');

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

//config request body parser
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

initAPIRoute(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
