import React from "react";
import "./Footer.css"; // Assurez-vous d'ajouter ce fichier CSS pour le style.

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <h3 className="footer-heading">Contact</h3>
                <p>
                    CRA Grand Est<br />
                    2 Rue de Rome<br />
                    67300 Schiltigheim<br />
                    France<br />
                    <a href="tel:+3388819754" className="footer-link">Tél : 03 88 81 97 54</a><br />
                    <a href="mailto:rmster-orleans@inrae.fr" className="footer-link">rmster-orleans@inrae.fr</a>
                </p>
            </div>
            <div className="footer-section">
                <h3 className="footer-heading">Liens</h3>
                <ul className="footer-link-list">
                    <li><a href="/actualites" className="footer-link">Actualités</a></li>
                    <li><a href="/mentions-legales" className="footer-link">Mentions légales</a></li>
                    <li><a href="/rechercher" className="footer-link">Rechercher</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="footer-heading">Nous suivre</h3>
                <div className="footer-icons">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/insta.jpg" alt="Instagram" className="footer-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.jpg" alt="Twitter" className="footer-icon" />
                    </a>
                </div>
                <div className="footer-buttons">
                    <button className="footer-button">Contact</button>
                    <button className="footer-button">Infolettre</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;