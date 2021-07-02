import React from "react";
import Form from "./Form";
import "./styles.sass";
const Footer = () => {
  const date = new Date();
  return (
    <div className="container-footer">
      <div className="footer layout-width">
        <div className="subscribe">
          <h3>
            SUSCRIBETE A NUESTRO NEWSLETER <span className="separate">|</span>
          </h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
        <Form />
        <div className="all-rights-reserved">
          <p>Todos los derechos reservados @ {date.getFullYear()} </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
