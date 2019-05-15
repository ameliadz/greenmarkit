import React, { Component } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          {" "}
          <img src="https://i.imgur.com/5D0jGSu.png" alt="" />{" "}
        </h1>

        <SearchContainer />
        <h2>About GreenMark!t</h2>
        <p>
          GreenMark!t is a place where Union Square producers can seamlessly
          share their products and services.
        </p>
        <footer>
          <h3>GreenMark!t &#169; Circa: 2019</h3>
        </footer>
      </div>
    );
  }
}

export default Home;
