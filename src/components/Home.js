import React from "react";
import { motion } from "framer-motion";
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
        Eu sou [Seu Nome], um desenvolvedor [sua especialidade].
      </p>
      <a href="/path/to/your/cv.pdf" className="btn" download>
        Baixar CV
      </a>
    </div>
  </motion.div>
);

export default Home;
