import React, { Component } from "react";
import saturdayMap from "../Maps/saturday-map.png";

class SaturdayMap extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImage: `url(${saturdayMap})`,
      backgroundPosition: "0% 0%"
    };
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    this.setState({ backgroundPosition: `${x}% ${y}%` });
  };
  render() {
    return (
      <div>
        <div className="map-label">
          <label htmlFor="saturday">SATURDAY</label>
          <figure onMouseMove={this.handleMouseMove} style={this.state}>
            <img src={saturdayMap} alt="saturday map" />
          </figure>
        </div>
      </div>
    );
  }
}

export default SaturdayMap;
