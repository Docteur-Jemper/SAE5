import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Exemple sans la bdd
    const genres = [
        "Action", "Aventure", "Comédie", "Drame", "Fantasy",
        "Horreur", "Mystère", "Science-fiction", "Romance", "Thriller"
    ];


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            
            <div className="header-section menu-logo">
                <button 
                    className="menu-button" 
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? "←" : "☰"}
                </button>
                <img src="/logo.png" alt="Logo du site" className="logo" />
            </div>

            {isMenuOpen && (
                <div className="dropdown-menu">
                    <h3>Catégories</h3>
                    <ul>
                        {genres.map((genre, index) => (
                            <li key={index} className="dropdown-item">
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <nav className="header-section nav-links">
                <a href="/">🏠 Accueil</a>
                <a href="/films">🎥 Films</a>
                <a href="/series">📺 Séries</a>
                <a href="/favoris">🎞️ Vidéos ❤️</a>
            </nav>

            <div className="header-section search-profile">
                <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    className="search-bar" 
                />
                <button className="profile-button">👤</button>
            </div>
        </header>
    );
};

export default Header;
