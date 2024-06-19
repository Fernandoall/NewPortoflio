import React from "react";
import { motion } from "framer-motion";
import "./Style/Sobre.css";

const Sobre = () => (
  <motion.div
    className="sobre-container"
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    exit={{ x: "100vw" }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    <h1>Sobre Mim</h1>
    <div className="sobre-content">
      <img src="path/to/your/profile.jpg" alt="Profile" className="sobre-pic" />
      <p>Informações sobre você...</p>
    </div>
  </motion.div>
);

export default Sobre;
