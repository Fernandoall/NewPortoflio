import React from "react";
import { motion } from "framer-motion";
import "./Style/Contato.css";

const Contato = () => (
  <motion.div
    className="contato-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <h1>Contato</h1>
    <div className="contato-form">
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" required></textarea>

        <motion.button
          type="submit"
          className="btn"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Enviar
        </motion.button>
      </form>
    </div>
  </motion.div>
);

export default Contato;
