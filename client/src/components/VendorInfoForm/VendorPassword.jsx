import React, { Component } from "react";

class VendorPassword extends Component {
  render() {
    return (
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
      </div>
    );
  }
}

export default VendorPassword;
