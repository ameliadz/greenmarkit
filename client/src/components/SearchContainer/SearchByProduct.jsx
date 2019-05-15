import React, { Component } from "react";

class SearchByProduct extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor='products'>Search By Product</label>
          <input
            type="text"
            name="search-products"
            placeholder="eggs, grains, jam"
          />
        </form>
      </div>
    );
  }
}

export default SearchByProduct;
