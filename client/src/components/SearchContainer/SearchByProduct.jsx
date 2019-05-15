import React, { Component } from "react";

class SearchByProduct extends Component {
  render() {
    return (
      <div>
        <div className="flex-wrapper">
        <form>
          <label htmlFor='products'>Search By Product</label>
          <input
            type="text"
            name="search-products"
            placeholder="eggs, grains, jam"
          />
        </form>
        </div>
      </div>
    );
  }
}

export default SearchByProduct;
