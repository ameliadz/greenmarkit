import React, { Component } from "react";

class VendorDaysFilter extends Component {
  render() {
    return (
      <div className="days-filter">
        <label htmlFor="days"><strong>Days Available</strong></label>
        <div>
          <input type="checkbox" name="days" id="monday" value="Monday" onChange={this.props.handleDaySelect} />
          <label htmlFor="monday">Monday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="wednesday" value="Wednesday" onChange={this.props.handleDaySelect}/>
          <label htmlFor="wednesday">Wednesday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="friday" value="Friday" onChange={this.props.handleDaySelect}/>
          <label htmlFor="friday">Friday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="saturday" value="Saturday" onChange={this.props.handleDaySelect}/>
          <label htmlFor="saturday">Saturday</label>
        </div>
      </div>
    );
  }
}

export default VendorDaysFilter;
