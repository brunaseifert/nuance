import React from "react";
import { Navbar } from "./styles";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar>
      <h2>Nuance</h2>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Início</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfólio</NavLink>
        <NavLink to="/servicos" className={({ isActive }) => (isActive ? 'active' : '')}>Serviços</NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>Contato</NavLink>
      </nav>
    </Navbar>
  );
}

export default NavBar;
