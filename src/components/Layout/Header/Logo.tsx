import React from "react";
import logotipo from "../../../images/logo.png";
import "./styles.sass";
const Logo = () => {
  return (
    <div className="logo">
      <img src={logotipo} alt="La marca" />;
    </div>
  );
};

export default Logo;
