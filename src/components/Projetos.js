import React from "react";
import { motion } from "framer-motion";

const Projetos = () => (
  <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1>Meus Projetos</h1>
    <p>Detalhes dos seus projetos.</p>
  </motion.div>
);

export default Projetos;
