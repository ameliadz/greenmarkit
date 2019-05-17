import React, { Component } from "react";

class SearchByName extends Component {
  render() {
    return (
      <div>
        <div className="flex-wrapper">
          <form>
            <label htmlFor="names">Search By Producer</label>
            <input
              type="text"
              name="search-names"
              placeholder="Bread Alone, Kimchee Harvest"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchByName;
