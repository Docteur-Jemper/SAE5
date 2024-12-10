import React, { useEffect, useState } from 'react';
import './AffichageVideos.css'; // Réutilisez le même fichier CSS pour un style cohérent

const Series = () => {
    const [series, setSeries] = useState([]); // Stocker les séries récupérées
    const [loading, setLoading] = useState(true); // Indiquer si les données chargent
    const [error, setError] = useState(null); // Gérer les erreurs

    useEffect(() => {
        fetch('http://localhost:8080/api/videos') // Votre backend doit écouter sur ce port
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des séries');
                }
                return response.json();
            })
            .then((data) => {
                setSeries(data.filter((video) => video.type === 'serie')); // Filtrer les séries
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error}</div>;

    return (
        <div className="films-container">
            <h1 className="films-title">Nos Séries</h1>
            <div className="films-grid">
                {series.map((serie) => (
                    <div key={serie.id_video} className="film-card">
                        <img
                            src={serie.chemin_poster}
                            alt={serie.titre}
                            className="film-poster"
                        />
                        <h3 className="film-title">{serie.titre}</h3>
                        <p className="film-category">{serie.categorie}</p>
                        <p className="film-views">{serie.nombre_vue} vues</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Series;
