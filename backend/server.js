const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:8080"], // Origines autorisées
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Permettre l'envoi de cookies ou sessions si nécessaire
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const videoRoutes = require('./app/routes/videoRoute');

// Ajouter la route des vidéos
app.use('/api', videoRoutes);
