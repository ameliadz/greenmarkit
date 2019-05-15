import React, { Component } from "react";
import FridayMap from "../Maps/FridayMap.jsx";
import SaturdayMap from "../Maps/SaturdayMap";
import WednesdayMap from "../Maps/WednesdayMap";
import MondayMap from "../Maps/MondayMap";
import "./MapsContainer.css";

class MapsContainer extends Component {
  render() {
    return (
      <div>
        <div className="maps-container">
          <div className="row-one">
            <div className="column">
              <MondayMap />
            </div>
            <div className="column">
              <WednesdayMap />
            </div>
          </div>
          <div className="row-two">
            <div className="column">
              <FridayMap />
            </div>
            <div className="column">
              <SaturdayMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapsContainer;
