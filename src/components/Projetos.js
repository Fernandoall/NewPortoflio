import React from "react";
import { motion } from "framer-motion";
import "./Style/Projetos.css";

const Projetos = () => (
  <motion.div
    className="projetos-container"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <h1>Meus Projetos</h1>
    <div className="projetos-grid">
      <div className="projeto-card">Projeto 1</div>
      <div className="projeto-card">Projeto 2</div>
      <div className="projeto-card">Projeto 3</div>
      {/* Adicione mais projetos aqui */}
    </div>
  </motion.div>
);

export default Projetos;
