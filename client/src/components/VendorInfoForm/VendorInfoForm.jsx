import React, { Component } from "react";
import './VendorInfoForm.css'
import VendorName from './VendorName';
import VendorProductFilter from './VendorProductFilter';
import VendorDaysFilter from './VendorDaysFilter';

class VendorInfoForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Vendor Information</h1>
        <form className="vendor-form">
          <VendorName />
          <div className="filters">
            <VendorProductFilter />
            <VendorDaysFilter />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default VendorInfoForm;
