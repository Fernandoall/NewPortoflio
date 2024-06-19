import React from "react";
import { motion } from "framer-motion";
import "./Style/Contato.css";

const Contato = () => (
  <motion.div
    className="contato-container"
    initial={{ y: "100vh" }}
    animate={{ y: 0 }}
    exit={{ y: "100vh" }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    <h1>Contato</h1>
    <form className="contato-form">
      <label>
        Nome:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Mensagem:
        <textarea name="message" required />
      </label>
      <button type="submit">Enviar</button>
    </form>
  </motion.div>
);

export default Contato;
