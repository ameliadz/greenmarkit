import React, { Component } from "react";

class VendorProductFilter extends Component {
  render() {
    return (
      <div className="products-radio">
        <div>
          <label htmlFor="products">Products</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="vegetables-herbs">Vegetable/Herbs</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="fruit-orchard">Fruit/Orchard</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="livestock">Livestock</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="plants-flowers">Plants/Flowers</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="baker-grains">Baker/Grains</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="fish">Fish</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="honey">Honey</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="dairy-cheese">Dairy/Cheese</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="eggs-poultry">Eggs/Poultry</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="mushrooms">Mushrooms</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="wine-beer-spirits">Wine/Beer/Spirits</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="maplesyrup">Maple Syrup</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label htmlFor="jams-pickles-preserves">Jams/Pickles/Preserves</label>
        </div>
      </div>
    );
  }
}

export default VendorProductFilter;
