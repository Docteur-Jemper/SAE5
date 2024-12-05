const connection = require('../models/db'); // Importez votre connexion à la base de données

// Fonction pour récupérer les vidéos
const getVideos = (req, res) => {
    const query = 'SELECT id_video, titre, description, chemin_poster, categorie, nombre_vue FROM Videos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des vidéos:', err);
            res.status(500).json({ error: 'Erreur serveur' });
        } else {
            res.json(results); // Retourner les vidéos sous forme de JSON
        }
    });
};

module.exports = { getVideos };
