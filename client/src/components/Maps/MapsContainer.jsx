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
            <div className="maps-column">
              <MondayMap />
            </div>
            <div className="maps-column">
              <WednesdayMap />
            </div>
          </div>
          <div className="row-two">
            <div className="maps-column">  
              <FridayMap />
            </div>
            <div className="maps-column">
              <SaturdayMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapsContainer;
