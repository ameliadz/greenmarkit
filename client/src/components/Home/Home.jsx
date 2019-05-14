import React, { Component } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>GreenMark!t</h1>
        <SearchContainer />
        <h2>For Vendors, Made by Nerds</h2>
        <h3>About</h3>
        <p>
          GreenMark!t is a place where Union Square vendors can seamlessly share
          their business. <br />
          Vendors can update products, upload photos and share availability.
        </p>
      </div>
    );
  }
}

export default Home;
