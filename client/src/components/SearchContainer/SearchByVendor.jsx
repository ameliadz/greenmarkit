import React, { Component } from "react";

class SearchByName extends Component {
  render() {
    return (
      <div>

        <form>
          <p>Search by Vendor</p>
          <input
            type="text"
            name="search-names"
            placeholder="Bread Alone, Kimchee Harvest"
          />
        </form>
      </div>
    );
  }
}

export default SearchByName;
