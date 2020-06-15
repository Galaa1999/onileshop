import React, { Component } from "react";
import css from "./style.module.css";
import Toolbar from "../Component/Toolbar";

class App extends Component {
  render() {
    return (
      <div className={css.header}>
        <Toolbar />
      </div>
    );
  }
}

export default App;
