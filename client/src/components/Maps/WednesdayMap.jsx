import React, { Component } from "react";
import wednesdayMap from "../Maps/wednesday-map.png";

class WednesdayMap extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImage: `url(${wednesdayMap})`,
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
          <label htmlFor="wednesday">WEDNESDAY</label>
          <figure onMouseMove={this.handleMouseMove} style={this.state}>
            <img src={wednesdayMap} alt="wednesday map" />
          </figure>
        </div>
      </div>
    );
  }
}

export default WednesdayMap;
