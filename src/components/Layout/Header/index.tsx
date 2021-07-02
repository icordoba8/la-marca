import React from "react";
import Navbar from "./Navbar";
import "./styles.sass";
import bgtext from "../../../images/bgtext.png";
const Header = () => {
  return (
    <header className="conatiner-header">
      <div className="header">
        <Navbar />
        <div className="breadcrumbs-title">
          <p>Inicio / Producto</p>
          <span></span>
          <span></span>
          <img className="bgtext" src={bgtext} alt="La marca" />
        </div>
        <div className="header-text">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              incidunt quod delectus iure ut magni quidem? Possimus voluptates
              voluptatum voluptas atque, tempora, id reiciendis voluptate error
              quasi quidem itaque quo!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
