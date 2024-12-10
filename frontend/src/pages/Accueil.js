import React, { useEffect, useState } from "react";
import "./Accueil.css";

const Accueil = () => {
  const [featuredContent, setFeaturedContent] = useState(null);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [videos, setVideos] = useState([]);
  const [favorites, setFavorites] = useState([]); // Vide initialement
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupérer les données depuis l'API
  useEffect(() => {
    fetch('http://localhost:8080/api/videos')
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données");
          }
          return response.json();
        })
        .then((data) => {
          setMovies(data.filter((item) => item.type === "film"));
          setSeries(data.filter((item) => item.type === "serie"));
          setVideos(data.filter((item) => item.type === "video"));
          setFeaturedContent(data[0]); // Exemple pour le contenu en avant : premier élément
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

  return (
      <div className="home-page">
        {/* Section en avant */}
        {featuredContent && (
            <section
                className="featured-section"
                style={{
                  backgroundImage: `url(${featuredContent.chemin_poster})`,
                }}
            >
              <div className="featured-content">
                <div className="featured-info">
                  <h1>{featuredContent.titre}</h1>
                  <div>
                    <p>📅 {new Date(featuredContent.date_ajout).getFullYear()}</p>
                    <p>? {featuredContent.type}</p>
                  </div>
                  <p>{featuredContent.description}</p>
                  <button>Voir le {featuredContent.type}</button>
                </div>
                <div className="featured-gallery">
                  <img
                      src={featuredContent.chemin_poster}
                      alt={featuredContent.titre}
                      className="featured-highlighted"
                  />
                </div>
              </div>
            </section>
        )}

        {/* Section Films */}
        <section className="movies-section">
          <div className="section-header">
            <h2>Films</h2>
            <button><a href="/films">Voir tous les films</a></button>
          </div>
          <div className="media-grid">
            {movies.map((movie) => (
                <img
                    key={movie.id_video}
                    src={movie.chemin_poster}
                    alt={movie.titre}
                />
            ))}
          </div>
        </section>

        {/* Section Séries */}
        <section className="series-section">
          <div className="section-header">
            <h2>Séries</h2>
            <button><a href="/series">Voir toutes les séries</a></button>
          </div>
          <div className="media-grid">
            {series.map((serie) => (
                <img
                    key={serie.id_video}
                    src={serie.chemin_poster}
                    alt={serie.titre}
                />
            ))}
          </div>
        </section>

        {/* Section Vidéos */}
        <section className="videos-section">
          <div className="section-header">
            <h2>Vidéos</h2>
            <button><a href="/videos">Voir toutes les vidéos</a></button>
          </div>
          <div className="media-grid">
            {videos.map((video) => (
                <img
                    key={video.id_video}
                    src={video.chemin_poster}
                    alt={video.titre}
                />
            ))}
          </div>
        </section>

        {/* Section Favoris */}
        <section className="favorites-section">
          <div className="section-header">
            <h2>Mes Favoris</h2>
            <button><a href="/favoris">Voir mes favoris</a></button>
          </div>
          <div className="media-grid">
            {favorites.length === 0 ? (
                <p>Aucun favori pour le moment</p>
            ) : (
                favorites.map((favorite) => (
                    <img
                        key={favorite.id_video}
                        src={favorite.chemin_poster}
                        alt={favorite.titre}
                    />
                ))
            )}
          </div>
        </section>
      </div>
  );
};

export default Accueil;
