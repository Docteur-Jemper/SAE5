import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil"; // Vérifie que ce fichier existe
import About from "./pages/About";
import Contact from "./pages/Contact";
import Watch from "./pages/Watch";
import './App.css';

const baseURL = "http://backend:8080/api";

const App = () => {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/watch" element={<Watch />} />
            {/* Ajoutez d'autres routes ici */}
          </Routes>
        </Layout>
      </Router>
  );
};

export default App;
