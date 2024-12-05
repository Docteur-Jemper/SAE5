const express = require('express');
const videoController = require('../controllers/VideoControllers');

const router = express.Router();

// Route GET pour récupérer toutes les vidéos
router.get('/videos', videoController.getVideos);

module.exports = router;
