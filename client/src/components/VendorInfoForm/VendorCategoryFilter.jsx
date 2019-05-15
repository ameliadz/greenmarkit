import React, { Component } from "react";

class VendorCategoryFilter extends Component {
  render() {
    return (
      <div className="products-radio" >
        <label htmlFor="products"><strong>Category</strong></label>
        <div>
          <input type="radio" name="products" id="vegetables-herbs" value="1"  onChange={this.props.handleCategoryValue} />
          <label htmlFor="vegetables-herbs">Vegetable/Herbs</label>
        </div>
        <div>
          <input type="radio" name="products" id="fruit-orchard" value="2" onChange={this.props.handleCategoryValue} />
          <label htmlFor="fruit-orchard">Fruit/Orchard</label>
        </div>
        <div>
          <input type="radio" name="products" id="livestock" value="3" onChange={this.props.handleCategoryValue} />
          <label htmlFor="livestock">Livestock</label>
        </div>
        <div>
          <input type="radio" name="products" id="plants-flowers" value="4" onChange={this.props.handleCategoryValue} />
          <label htmlFor="plants-flowers">Plants/Flowers</label>
        </div>
        <div>
          <input type="radio" name="products" id="baker-grains" value="5" onChange={this.props.handleCategoryValue} />
          <label htmlFor="baker-grains">Baker/Grains</label>
        </div>
        <div>
          <input type="radio" name="products" id="fish" value="6" onChange={this.props.handleCategoryValue} />
          <label htmlFor="fish">Fish</label>
        </div>
        <div>
          <input type="radio" name="products" id="honey" value="7" onChange={this.props.handleCategoryValue} />
          <label htmlFor="honey">Honey</label>
        </div>
        <div>
          <input type="radio" name="products" id="dairy-cheese" value="8" onChange={this.props.handleCategoryValue} />
          <label htmlFor="dairy-cheese">Dairy/Cheese</label>
        </div>
        <div>
          <input type="radio" name="products" id="eggs-poultry" value="9" onChange={this.props.handleCategoryValue} />
          <label htmlFor="eggs-poultry">Eggs/Poultry</label>
        </div>
        <div>
          <input type="radio" name="products" id="mushrooms" value="10" onChange={this.props.handleCategoryValue} />
          <label htmlFor="mushrooms">Mushrooms</label>
        </div>
        <div>
          <input type="radio" name="products" id="wine-beer-spirits" value="11" onChange={this.props.handleCategoryValue} />
          <label htmlFor="wine-beer-spirits">Wine/Beer/Spirits</label>
        </div>
        <div>
          <input type="radio" name="products" id="maplesyrup" value="12" onChange={this.props.handleCategoryValue} />
          <label htmlFor="maplesyrup">Maple Syrup</label>
        </div>
        <div>
          <input type="radio" name="products" id="jams-pickles-preserves" value="13" onChange={this.props.handleCategoryValue} />
          <label htmlFor="jams-pickles-preserves">Jams/Pickles/Preserves</label>
        </div>
      </div>
    );
  }
}

export default VendorCategoryFilter;
