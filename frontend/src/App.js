import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Films from "./pages/Films";
import Series from "./pages/Series";
import Videos from "./pages/Videos";

const baseURL = "http://backend:8080/api";

const App = () => {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/films" element={<Films />} />
            <Route path="/series" element={<Series />} />
            <Route path="/videos" element={<Videos />} />
            {/* Ajoutez d'autres routes ici */}
          </Routes>
        </Layout>
      </Router>
  );
};

export default App;
