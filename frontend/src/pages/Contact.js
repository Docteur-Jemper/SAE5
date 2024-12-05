import React from "react";
import "./Contact.css"; // Fichier CSS pour styliser cette page

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contactez-nous</h1>
            <p className="contact-description">
                Si vous avez des questions ou souhaitez obtenir plus d'informations, n'hésitez pas à nous contacter via le formulaire ci-dessous ou à utiliser les informations fournies.
            </p>
            <div className="contact-content">
                <div className="contact-form">
                    <h2>Envoyer un message</h2>
                    <form>
                        <label htmlFor="name">Nom :</label>
                        <input type="text" id="name" name="name" placeholder="Votre nom" required/>

                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" placeholder="Votre email" required/>

                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message" placeholder="Votre message" rows="5" required></textarea>

                        <button type="submit" className="contact-submit">Envoyer</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2>Informations de contact</h2>
                    <p><strong>Adresse :</strong> 2 Rue de Rome, 67300 Schiltigheim, France</p>
                    <p><strong>Téléphone :</strong> <a href="tel:+3388819754">03 88 81 97 54</a></p>
                    <p><strong>Email :</strong> <a href="mailto:rmster-orleans@inrae.fr">rmster-orleans@inrae.fr</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
