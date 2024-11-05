-- Création de la base de données FlexStream
CREATE DATABASE IF NOT EXISTS FlexStream;
USE FlexStream;

-- Table Utilisateurs
CREATE TABLE Utilisateurs (
    id_utilisateur INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role ENUM('utilisateur', 'administrateur') DEFAULT 'utilisateur',
    date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
    derniere_connexion DATETIME,
    photo_profil VARCHAR(255)
);

-- Table Videos
CREATE TABLE Videos (
    id_video INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    chemin_fichier VARCHAR(255) NOT NULL,
    date_ajout DATETIME DEFAULT CURRENT_TIMESTAMP,
    categorie VARCHAR(100),
    nombre_vue INT DEFAULT 0,
    INDEX (titre),
    INDEX (categorie)
);

-- Table Commentaires
CREATE TABLE Commentaires (
    id_commentaire INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur INT NOT NULL,
    id_video INT NOT NULL,
    commentaire TEXT NOT NULL,
    date_commentaire DATETIME DEFAULT CURRENT_TIMESTAMP,
    date_modification DATETIME,
    statut ENUM('actif', 'supprimé') DEFAULT 'actif',
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id_utilisateur) ON DELETE CASCADE,
    FOREIGN KEY (id_video) REFERENCES Videos(id_video) ON DELETE CASCADE
);

-- Table Logs
CREATE TABLE Logs (
    id_log INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur INT NOT NULL,
    action VARCHAR(100) NOT NULL,
    date_action DATETIME DEFAULT CURRENT_TIMESTAMP,
    ip_adresse VARCHAR(45),
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id_utilisateur) ON DELETE SET NULL
);

-- Table Favoris
CREATE TABLE Favoris (
    id_favoris INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur INT NOT NULL,
    id_video INT NOT NULL,
    date_ajout DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id_utilisateur) ON DELETE CASCADE,
    FOREIGN KEY (id_video) REFERENCES Videos(id_video) ON DELETE CASCADE
);
