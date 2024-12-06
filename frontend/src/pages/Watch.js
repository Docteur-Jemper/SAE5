import React from "react";
import "./Watch.css";

const Watch = ({ title, year, image, description, director, actors, onFavoriteToggle, isFavorite }) => {
  return (
    <div className="watch-page">
      <header className="watch-header">
        <h1>{title ? title : 'Titre par défauts'}</h1>
        <p className="watch-year">{year ? year : '2000 ?'}</p>
      </header>

      <div className="watch-content">
        <div className="watch-sidebar">
          <img src={image} alt={title ? title : 'Titre par défauts'} className="watch-image" />
          <button
            className={`favorite-button ${isFavorite ? "favorite" : ""}`}
            onClick={onFavoriteToggle}
          >
            ❤️
          </button>
        </div>

        <div className="watch-main">
            
          <div className="video-container">
            <video controls>
              <source src="video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="details">
            <h2>Description</h2>
            <p>{description ? description : 'Description absente'}</p>

            <h2>Directeur</h2>
            <p>{director ? director : 'Director absent'}</p>

            <h2>Acteurs</h2>
            <p>{actors ? actors : 'Actors absent'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
