const db = require("./db.js");

const UniversalModel = {
  // Récupérer toutes les lignes d'une table
  getAll: async (table) => {
    const sql = `SELECT * FROM ??`; // Utilisation des placeholders pour éviter les injections SQL
    return db.query(sql, [table]);
  },

  // Récupérer une ligne par ID
  getById: async (table, id) => {
    const sql = `SELECT * FROM ?? WHERE id = ?`;
    return db.query(sql, [table, id]);
  },

  // Créer une nouvelle ligne
  create: async (table, data) => {
    const sql = `INSERT INTO ?? SET ?`;
    return db.query(sql, [table, data]);
  },

  // Mettre à jour une ligne
  update: async (table, id, data) => {
    const sql = `UPDATE ?? SET ? WHERE id = ?`;
    return db.query(sql, [table, data, id]);
  },

  // Supprimer une ligne
  delete: async (table, id) => {
    const sql = `DELETE FROM ?? WHERE id = ?`;
    return db.query(sql, [table, id]);
  },
};

module.exports = UniversalModel;
