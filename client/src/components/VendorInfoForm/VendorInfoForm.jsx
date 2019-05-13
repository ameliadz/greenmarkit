import React, { Component } from "react";

class VendorInfoForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Vendor Information</h1>
        <form>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default VendorInfoForm;
