import React, { Component } from "react";
import wednesdayMap from "../Maps/map-boilerplate-friday.png";

class WednesdayMap extends Component {
  render() {
    return (
      <div>
        <div className="map-label">
          <label for="wednesday">WEDNESDAY</label>
          <img src={wednesdayMap} alt="wednesday map" />
        </div>
      </div>
    );
  }
}

export default WednesdayMap;
