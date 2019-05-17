import React, { Component } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import "./Home.css";
import markitLogo from "../Home/markit-logo.png";

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h1>
          {" "}
          <img src={markitLogo} alt="" />{" "}
        </h1>

        <SearchContainer />
        <h2>About GreenMark!t</h2>
        <p className="about">
          GreenMark!t is a place where Union Square producers can seamlessly
          share their products and services.
        </p>
        <footer>
          <h3>GreenMark!t &#169; 2019</h3>
        </footer>
      </div>
    );
  }
}

export default Home;
