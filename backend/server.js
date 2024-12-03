const express = require("express");
const cors = require("cors");

const app = express();

// Configuration CORS
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:8081"], // Origines autorisées
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import de la connexion à la base de données
const db = require('./app/models/db');

// Endpoint pour récupérer les vidéos
app.get('/api/videos', (req, res) => {
  db.query('SELECT * FROM Videos', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des vidéos:', err);
      return res.status(500).send('Erreur serveur');
    }
    res.json(results);
  });
});


// Démarrage du serveur
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
