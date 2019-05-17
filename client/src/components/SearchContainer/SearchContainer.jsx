import React, { Component } from "react";
import SearchByProduct from "../SearchContainer/SearchByProduct";
import SearchByVendor from "../SearchContainer/SearchByVendor";

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <SearchByVendor />
        <SearchByProduct />
      </div>
    );
  }
}

export default SearchContainer;
