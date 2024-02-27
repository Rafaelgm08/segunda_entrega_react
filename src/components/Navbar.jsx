import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <h1>Hola</h1>
    <nav className="container mt-2 d-flex">
        <NavLink to="/">
            <button className="btn btn-outline-dark">Home</button>
        </NavLink>
        <NavLink to="/cart">
            <button className="btn btn-outline-dark">Carrito</button>
        </NavLink>
    </nav>
    </>
  );
};
