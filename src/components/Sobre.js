import React from "react";
import { motion } from "framer-motion";

const Sobre = () => (
  <motion.div
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    <h1>Sobre Mim</h1>
    <p>Informações sobre você.</p>
  </motion.div>
);

export default Sobre;
