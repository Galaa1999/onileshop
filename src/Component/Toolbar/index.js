import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";

const Toolbar = () => {
  return (
    <div className={css.Header}>
      <Logo />
    </div>
  );
};
export default Toolbar;
