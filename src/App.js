import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Navbar from "./components/Navbar";
import Habilidades from "./components/Habilidades";
import Testemunhos from "./components/Comentarios";
import Artigos from "./components/artigos";
import Certificacoes from "./components/Certificacoes";
import Experiencia from "./components/experiencia";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app"}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/sobre" element={<Sobre darkMode={darkMode} />} />
          <Route path="/projetos" element={<Projetos darkMode={darkMode} />} />
          <Route path="/contato" element={<Contato darkMode={darkMode} />} />
          <Route
            path="/habilidades"
            element={<Habilidades darkMode={darkMode} />}
          />
          <Route
            path="/testemunhos"
            element={<Testemunhos darkMode={darkMode} />}
          />
          <Route path="/artigos" element={<Artigos darkMode={darkMode} />} />
          <Route
            path="/certificacoes"
            element={<Certificacoes darkMode={darkMode} />}
          />
          <Route
            path="/experiencia"
            element={<Experiencia darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
