import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact-page";
import Section from "./pages/Section";



import "./App.css"; 
const App = () => {
  return (
    <div >
      <Router>
      <Navbar />
      <Routes>
      <Route path="/Opio-fragrances" element={<Home />} /> 
      <Route path="/Contact-page" element={<Contact />} /> 
      <Route path="/Section" element={<Section />} /> 
      </Routes>
      <Footer />
      </Router>
    </div>
  );
};

export default App;