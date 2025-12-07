import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; 
import Portfolio from "./Portfolio"; 
import Servicos from "./Servicos";
import Contato from "./Contato";
import NavBar from "./Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      
        <Route path="/" element={<Home />} />

       
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
