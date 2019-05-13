import React, { Component } from "react";

class VendorDaysFilter extends Component {
  render() {
    return (
      <div className="days-filter">
        <div>
          <label htmlFor="days">Days Available</label>
        </div>
        <div>
          <input type="radio" name="days" />
          <label for="monday">Monday</label>
        </div>
        <div>
          <input type="radio" name="days" />
          <label for="wednesday">Wednesday</label>
        </div>
        <div>
          <input type="radio" name="days" />
          <label for="friday">Friday</label>
        </div>
        <div>
          <input type="radio" name="days" />
          <label for="saturday">Saturday</label>
        </div>
      </div>
    );
  }
}

export default VendorDaysFilter;
