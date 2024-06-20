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
    <motion.form
      className="contato-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
      <motion.button type="submit" whileHover={{ scale: 1.05 }}>
        Enviar
      </motion.button>
    </motion.form>
  </motion.div>
);

export default Contato;
