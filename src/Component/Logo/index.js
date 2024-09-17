import React from "react";
import css from "./style.module.css";
import LogoImage from "../../image/logo.png";
//add logo
const Logo = (props) => (
  <div className={css.Logo}>
    <img alt="" src={LogoImage} />
  </div>
);
export default Logo;
