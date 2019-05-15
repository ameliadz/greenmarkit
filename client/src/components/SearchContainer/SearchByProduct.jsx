import React, { Component } from "react";

class SearchByProduct extends Component {
  render() {
    return (
      <div>
        <form>
          <label for='products'>Search By Product</label>
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
