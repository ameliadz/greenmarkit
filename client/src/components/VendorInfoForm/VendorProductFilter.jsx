import React, { Component } from "react";

class VendorProductFilter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="products">Products</label>
        <input type="checkbox" name="products" />
        <label for="vegetables">Vegetable/Herbs</label>
      </div>
    );
  }
}

export default VendorProductFilter;
