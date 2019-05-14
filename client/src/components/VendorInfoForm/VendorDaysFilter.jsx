import React, { Component } from "react";

class VendorDaysFilter extends Component {
  render() {
    return (
      <div className="days-filter">
        <div>
          <label htmlFor="days">Days Available</label>
        </div>
        <div>
          <input type="checkbox" name="days" />
          <label htmlFor="monday">Monday</label>
        </div>
        <div>
          <input type="checkbox" name="days" />
          <label htmlFor="wednesday">Wednesday</label>
        </div>
        <div>
          <input type="checkbox" name="days" />
          <label htmlFor="friday">Friday</label>
        </div>
        <div>
          <input type="checkbox" name="days" />
          <label htmlFor="saturday">Saturday</label>
        </div>
      </div>
    );
  }
}

export default VendorDaysFilter;
