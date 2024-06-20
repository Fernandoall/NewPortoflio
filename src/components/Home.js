import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "./Style/Home.css";

const Home = () => (
  <motion.div
    className="home-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="intro">
      <img
        src="path/to/your/profile.jpg"
        alt="Profile"
        className="profile-pic"
      />
      <h1 className="home-title">Bem-vindo ao meu portfólio</h1>
      <p className="home-description">
        Eu sou Fernando, tenho 27 anos e estou cursando Análise e
        Desenvolvimento de Sistemas. Tenho proficiência em desenvolvimento
        front-end.
      </p>
      <motion.a
        href="/path/to/your/cv.pdf"
        className="btn"
        download
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaDownload /> Baixar CV
      </motion.a>
    </div>
  </motion.div>
);

export default Home;
