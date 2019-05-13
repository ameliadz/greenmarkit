import React, { Component } from "react";

class VendorHours extends Component {
  render() {
    return (
      <div className="hours-open">
        <div className="opening-time">
          <input type="text" name="open" placeholder="8:00" />
          <div>
            <input type="checkbox" name="open" />
            <label for="am">am</label>
          </div>
          <div>
            <input type="checkbox" name="open" />
            <label for="pm">pm</label>
          </div>
        </div>
        <div className="closing-time">
          <input type="text" name="close" placeholder="5:00" />
          <div>
            <input type="checkbox" name="close" />
            <label for="am">am</label>
          </div>
          <div>
            <input type="checkbox" name="close" />
            <label for="pm">pm</label>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorHours;
