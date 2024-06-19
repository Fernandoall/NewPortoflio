import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";

const App = () => {
  return (
    <Router>
      <Navbar />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default App;
