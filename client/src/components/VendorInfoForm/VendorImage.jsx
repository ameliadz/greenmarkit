import React, { Component } from "react";

class VendorImage extends Component {
  render() {
    return (
      <div>
        <label htmlFor="photo">Upload A Photo(URL only)</label>
        <input type="text" name="photo" placeholder="" />
        <button type="submit">Add Photo</button>
      </div>
    );
  }
}

export default VendorImage;
