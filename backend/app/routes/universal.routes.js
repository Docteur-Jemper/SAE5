const express = require("express");
const router = express.Router();
const universalController = require("../controllers/universal.controller.js");

// Routes dynamiques pour toutes les tables
router.get("/:table", universalController.getAll);
router.get("/:table/:id", universalController.getById);
router.post("/:table", universalController.create);
router.put("/:table/:id", universalController.update);
router.delete("/:table/:id", universalController.delete);

module.exports = router;





