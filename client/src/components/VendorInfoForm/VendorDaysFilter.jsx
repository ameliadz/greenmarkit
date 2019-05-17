import React, { Component } from "react";

class VendorDaysFilter extends Component {
  render() {
    return (
      <div className="days-filter">
      <label className="open" htmlFor="days"><strong>Days Open</strong></label>
      {this.props.allDays.map(day => {
        return (
          <div key={day.id}>
            <input type="checkbox" name="days" id={day.name} value={day.id} onChange={this.props.handleDaySelect} checked={this.props.days.includes(day)} />
            <label htmlFor={day.name}>{day.name}</label>
          </div>
        )
      })}
      </div>
    )
  }
  // render() {
  //   return (
  //     <div className="days-filter">
  //       <label className="open" htmlFor="days"><strong>Days Open</strong></label>
  //       <div>
  //         <input type="checkbox" name="days" id="monday" value="1" onChange={this.props.handleDaySelect} />
  //         <label htmlFor="monday">Monday</label>
  //       </div>
  //       <div>
  //         <input type="checkbox" name="days" id="wednesday" value="2" onChange={this.props.handleDaySelect}/>
  //         <label htmlFor="wednesday">Wednesday</label>
  //       </div>
  //       <div>
  //         <input type="checkbox" name="days" id="friday" value="3" onChange={this.props.handleDaySelect}/>
  //         <label htmlFor="friday">Friday</label>
  //       </div>
  //       <div>
  //         <input type="checkbox" name="days" id="saturday" value="4" onChange={this.props.handleDaySelect}/>
  //         <label htmlFor="saturday">Saturday</label>
  //       </div>
  //     </div>
  //   );
  // }
}

export default VendorDaysFilter;
