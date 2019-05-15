import React, { Component } from "react";
import fridayMap from "../Maps/map-boilerplate-friday.png";

class FridayMap extends Component {
  render() {
    return (
      <div>
        <div className="map-label">
          <label for="monday">MONDAY</label>
          <img src={fridayMap} alt="monday map" />
        </div>
      </div>
    );
  }
}

export default FridayMap;
