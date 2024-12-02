const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/videos', (req, res) => {
    db.query('SELECT * FROM Videos', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des vidéos :', err);
            res.status(500).send('Erreur serveur');
        } else {
            res.json(results);
    });
});

module.exports = router;
