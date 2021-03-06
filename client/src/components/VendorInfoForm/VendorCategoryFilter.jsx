import React, { Component } from "react";
import "./VendorInfoForm.css";

class VendorCategoryFilter extends Component {
  render() {
    return (
      <div className="products-dropdown">
        <div className="row">
          <div className="column">
            <label htmlFor="category">
              <strong className="category">Category</strong>
            </label>
            <select
              name="category"
              required
              onChange={this.props.handleCategoryValue}
            >
              <option value="null">Select a category</option>
              <option value="1">Vegetable/Herbs</option>
              <option value="2">Fruit/Orchard</option>
              <option value="3">Livestock</option>
              <option value="4">Plants/Flowers</option>
              <option value="5">Baker/Grains</option>
              <option value="6">Fish</option>
              <option value="7">Honey</option>
              <option value="8">Dairy/Cheese</option>
              <option value="9">Eggs/Poultry</option>
              <option value="10">Mushrooms</option>
              <option value="11">Wine/Beer/Spirits</option>
              <option value="12">Maple Syrup</option>
              <option value="13">Jams/Pickles/Preserves</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorCategoryFilter;
