import React, { Component } from "react";
import saturdayMap from "../Maps/map-boilerplate-friday.png";

class SaturdayMap extends Component {
  render() {
    return (
      <div>
        <div className="map-label">
          <label for="saturday">SATURDAY</label>
          <img src={saturdayMap} alt="saturday map" />
        </div>
      </div>
    );
  }
}

export default SaturdayMap;
