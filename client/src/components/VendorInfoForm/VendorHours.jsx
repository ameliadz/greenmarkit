import React, { Component } from "react";

class VendorHours extends Component {
  render() {
    return (
      <div className="hours-open">
        <div className="opening-time">
          <input type="text" name="open" placeholder="8:00" />
          <div>
            <input type="radio" name="open" />
            <label htmlFor="am">am</label>
          </div>
          <div>
            <input type="radio" name="open" />
            <label htmlFor="pm">pm</label>
          </div>
        </div>
        <div className="closing-time">
          <input type="text" name="close" placeholder="5:00" />
          <div>
            <input type="radio" name="close" />
            <label htmlFor="am">am</label>
          </div>
          <div>
            <input type="radio" name="close" />
            <label htmlFor="pm">pm</label>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorHours;
