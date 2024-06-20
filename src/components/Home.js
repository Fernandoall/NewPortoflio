import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "./Style/Home.css";
import background from "./Style/img/imageFundo.gif"; // Caminho da imagem de fundo

const Home = () => (
  <motion.div
    className="home-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    style={{ backgroundImage: `url(${background})` }} // Estilo para aplicar a imagem de fundo
  >
    <div className="intro">
      <img
        src="path/to/your/profile.jpg"
        alt="Profile"
        className="profile-pic"
      />
      <h1 className="home-title">Bem-vindo ao meu portfólio</h1>
      <p className="home-description">
        Eu sou Fernando, um desenvolvedor front-end.
      </p>
      <a href="/path/to/your/cv.pdf" className="btn" download>
        <FaDownload /> Baixar CV
      </a>
    </div>
  </motion.div>
);

export default Home;
