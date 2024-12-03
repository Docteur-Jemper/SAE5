const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((error) => {
  if (error) {
    console.error("Erreur de connexion à la base de données :", error.message);
    process.exit(1);
  }
  console.log("Connecté à la base de données MySQL !");
});

module.exports = connection;
