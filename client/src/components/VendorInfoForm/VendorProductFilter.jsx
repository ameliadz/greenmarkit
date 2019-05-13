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
          <label for="vegetables-herbs">Vegetable/Herbs</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="fruit-orchard">Fruit/Orchard</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="livestock">Livestock</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="plants-flowers">Plants/Flowers</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="baker-grains">Baker/Grains</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="fish">Fish</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="honey">Honey</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="dairy-cheese">Dairy/Cheese</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="eggs-poultry">Eggs/Poultry</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="mushrooms">Mushrooms</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="wine-beer-spirits">Wine/Beer/Spirits</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="maplesyrup">Maple Syrup</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label for="jams-pickles-preserves">Jams/Pickles/Preserves</label>
        </div>
      </div>
    );
  }
}

export default VendorProductFilter;
