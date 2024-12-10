import React, { useEffect, useState } from 'react';
import './AffichageVideos.css'; // Réutilisez le même fichier CSS pour un style cohérent

const Videos = () => {
    const [videos, setVideos] = useState([]); // Stocker les vidéos récupérées
    const [loading, setLoading] = useState(true); // Indiquer si les données chargent
    const [error, setError] = useState(null); // Gérer les erreurs

    useEffect(() => {
        fetch('http://localhost:8080/api/videos') // Votre backend doit écouter sur ce port
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des vidéos');
                }
                return response.json();
            })
            .then((data) => {
                setVideos(data.filter((video) => video.type === 'video')); // Filtrer les vidéos
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
            <h1 className="films-title">Nos Vidéos</h1>
            <div className="films-grid">
                {videos.map((video) => (
                    <div key={video.id_video} className="film-card">
                        <img
                            src={video.chemin_poster}
                            alt={video.titre}
                            className="film-poster"
                        />
                        <h3 className="film-title">{video.titre}</h3>
                        <p className="film-category">{video.categorie}</p>
                        <p className="film-views">{video.nombre_vue} vues</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
