import React, { Component } from "react";

class VendorDaysFilter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="days">Available</label>
        <input type="checkbox" name="days" />
      </div>
    );
  }
}

export default VendorDaysFilter;
