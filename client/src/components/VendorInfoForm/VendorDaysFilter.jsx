import React, { Component } from "react";

class VendorDaysFilter extends Component {
  render() {
    return (
      <div className="days-filter">
        <label htmlFor="days"><strong>Days Available</strong></label>
        <div>
          <input type="checkbox" name="days" id="monday" />
          <label htmlFor="monday">Monday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="wednesday" />
          <label htmlFor="wednesday">Wednesday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="friday" />
          <label htmlFor="friday">Friday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="saturday" />
          <label htmlFor="saturday">Saturday</label>
        </div>
      </div>
    );
  }
}

export default VendorDaysFilter;
