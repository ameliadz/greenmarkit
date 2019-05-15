import React, { Component } from "react";
import fridayMap from "../Maps/map-boilerplate-friday.png";

class FridayMap extends Component {
  render() {
    return (
      <div>
        <div className="map-label">
        <label for="friday">FRIDAY</label>
          <img src={fridayMap} alt="friday map" />
        </div>
      </div>
    );
  }
}

export default FridayMap;
