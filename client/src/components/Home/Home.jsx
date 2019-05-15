import React, { Component } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <h1> <img src="https://i.imgur.com/5D0jGSu.png"></img> </h1>
        
        <SearchContainer />
        <h2>For Vendors, Made by Nerds</h2>
        <h3>About</h3>
        <p>
          GreenMark!t is a place where Union Square vendors can seamlessly share
          their business. <br />
          <p>Vendors can update products, upload photos and share availability.</p>
          <br />
          <p>Greenmarket was founded in 1976 with a two-fold mission: to promote regional agriculture by providing small family farms the opportunity to 
          sell their locally grown products directly to consumers, 
          and to ensure that all New Yorkers have access to the freshest, 
          most nutritious locally grown food the region has to offer.</p>
        </p>
      </div>
    );
  }
}

export default Home;
