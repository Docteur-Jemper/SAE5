import React, { useEffect, useState } from 'react';
import './Films.css'; // Créez ce fichier CSS pour le style

const Films = () => {
    const [films, setFilms] = useState([]); // Stocker les vidéos récupérées
    const [loading, setLoading] = useState(true); // Indiquer si les données chargent
    const [error, setError] = useState(null); // Gérer les erreurs

    // Fonction pour récupérer les vidéos depuis l'API
    useEffect(() => {
        fetch('http://localhost:8080/api/videos') // Votre backend doit écouter sur ce port
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des vidéos');
                }
                return response.json();
            })
            .then((data) => {
                setFilms(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Affichage en cas de chargement ou d'erreur
    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error}</div>;

    // Affichage principal
    return (
        <div className="films-container">
            <h1 className="films-title">Nos Films</h1>
            <div className="films-grid">
                {films.map((film) => (
                    <div key={film.id_video} className="film-card">
                        <img
                            src={film.chemin_poster}
                            alt={film.titre}
                            className="film-poster"
                        />
                        <h3 className="film-title">{film.titre}</h3>
                        <p className="film-category">{film.categorie}</p>
                        <p className="film-views">{film.nombre_vue} vues</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Films;
