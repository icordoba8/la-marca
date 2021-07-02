import React from "react";
import Logo from "./Logo";
import "./styles.sass";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/products">
                PRODUCTOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/lamarca">
                LA MARCA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dondecomprar">
                DONDE COMPRAR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                CONTACTANOS
              </a>
            </li>
            <li className="nav-item nav-icon">
              <a className="nav-link" href="/contact">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="nav-link" href="/contact">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="nav-link" href="/contact">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
