import React from "react";
import "./Accueil.css";

const Accueil = () => {

  // Exemple sans la bdd
  const featuredContent = [
    {
      title: "Titre de l'œuvre",
      year: 2023,
      type: "Film",
      description:
        "Une brève description de l'œuvre !",
      image: "path/to/featured-image.jpg",
    },
  ];
  const movies = [
    "path/to/movie1.jpg",
    "path/to/movie2.jpg",
    "path/to/movie3.jpg",
  ];
  const series = [
    "path/to/series1.jpg",
    "path/to/series2.jpg",
    "path/to/series3.jpg",
  ];
  const favorites = [
    "path/to/favorite1.jpg",
    "path/to/favorite2.jpg",
    "path/to/favorite3.jpg",
  ];


  return (
    <div className="home-page">
      
      <section
        className="featured-section"
        style={{
          backgroundImage: `url(${featuredContent[0].image})`,
        }}
      >
        <div className="featured-content">
          <div className="featured-info">
            <h1>{featuredContent[0].title}</h1>
            <div>
              <p>📅 {featuredContent[0].year}</p>
              <p>? {featuredContent[0].type}</p>
            </div>
            <p>{featuredContent[0].description}</p>
            <button>Voir le {featuredContent[0].type}</button>
          </div>
          <div className="featured-gallery">
            <img
              src={featuredContent[0].image}
              alt={featuredContent[0].title}
              className="featured-highlighted"
            />
          </div>
        </div>
      </section>

      <section className="movies-section">
        <div className="section-header">
          <h2>Films</h2>
          <button><a href="/films">Voir tous les films</a></button>
        </div>
        <div className="media-grid">
          {movies.map((movie, index) => (
            <img key={index} src={movie} alt={`Film ${index}`} />
          ))}
        </div>
      </section>

      <section className="series-section">
        <div className="section-header">
          <h2>Séries</h2>
          <button><a href="/series">Voir toutes les séries</a></button>
        </div>
        <div className="media-grid">
          {series.map((serie, index) => (
            <img key={index} src={serie} alt={`Série ${index}`} />
          ))}
        </div>
      </section>

      <section className="favorites-section">
        <div className="section-header">
          <h2>Mes Favoris</h2>
          <button><a href="/favoris">Voir mes favoris</a></button>
        </div>
        <div className="media-grid">
          {favorites.map((favorite, index) => (
            <img key={index} src={favorite} alt={`Favori ${index}`} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accueil;
