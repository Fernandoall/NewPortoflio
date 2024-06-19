import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Sobre">Sobre</Link></li>
      <li><Link to="/Projetos">Projetos</Link></li>
      <li><Link to="/Contato">Contato</Link></li>
    </ul>
  </nav>
)

export default Navbar;