import React, { Component } from 'react';

export default function Filter(props) {
  return (
    <div className="vendor-list-filter">
      <form>
        <label>Search By Producer Name</label>
        <input type="text" data-type="name" />
        <input type="submit" value="Search" />
      </form>
      <form>
        <label>Search By Product</label>
        <input type="text" data-type="products" />
        <input type="submit" value="Search" />
      </form>
      <form>
        <label>Filter By Days Category</label>
        <select>
          <option value="test"> test </option>
        </select>
      </form>
      <form>
      <div className="days-filter">
        <label htmlFor="days"><strong>Days Available</strong></label>
        <div>
          <input type="checkbox" name="days" id="monday" value="1" onChange={this.props.handleDaySelect} />
          <label htmlFor="monday">Monday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="wednesday" value="2" onChange={this.props.handleDaySelect}/>
          <label htmlFor="wednesday">Wednesday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="friday" value="3" onChange={this.props.handleDaySelect}/>
          <label htmlFor="friday">Friday</label>
        </div>
        <div>
          <input type="checkbox" name="days" id="saturday" value="4" onChange={this.props.handleDaySelect}/>
          <label htmlFor="saturday">Saturday</label>
        </div>
      </div>
     </form>
    </div>
  )
};
