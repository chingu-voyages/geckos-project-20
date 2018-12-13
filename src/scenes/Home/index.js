import React, { Component } from "react";
import "./styles.scss";
import Focus from "./components/Focus/index";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Power Panel</h1>
        <Focus />
      </React.Fragment>
    );
  }
}

export default Home;
