import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Importe o arquivo de estilos do Home

const Home = () => (
  <motion.div
    className="home-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="home-title">Bem-vindo ao meu portfólio</h1>
    <p className="home-description">
      Eu sou [Seu Nome], um desenvolvedor [sua especialidade].
    </p>
  </motion.div>
);

export default Home;
