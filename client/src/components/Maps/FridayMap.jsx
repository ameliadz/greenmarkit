import React, { Component } from "react";
import fridayMap from "../Maps/friday-map.png";

class FridayMap extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImage: `url(${fridayMap})`,
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
          <label htmlFor="friday">FRIDAY</label>
          <figure onMouseMove={this.handleMouseMove} style={this.state}>
            <img src={fridayMap} alt="friday map" />
          </figure>
        </div>
      </div>
    );
  }
}

export default FridayMap;
