import React from "react";
import { motion } from "framer-motion";

const Contato = () => (
  <motion.div
    initial={{ y: "100vh" }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    <h1>Contato</h1>
    <p>Formas de entrar em contato.</p>
  </motion.div>
);

export default Contato;
