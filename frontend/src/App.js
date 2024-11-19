import React from 'react';
import Body from './body'; // Assure-toi que le chemin est correct
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Ajoutez d'autres routes ici */}
          </Routes>
        </Layout>
      </Router>
  );
};

export default App;
