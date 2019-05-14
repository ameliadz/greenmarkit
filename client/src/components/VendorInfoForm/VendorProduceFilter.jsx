import React, { Component } from "react";

class VendorProduceFilter extends Component {
  render() {
    return (
      <div className="products-radio" >
        <label htmlFor="products"><strong>Produce</strong></label>
        <div>
          <input type="radio" name="products" id="vegetables-herbs" value="Vegetable/Herbs" onClick={this.props.handleProduceValue} />
          <label htmlFor="vegetables-herbs">Vegetable/Herbs</label>
        </div>
        <div>
          <input type="radio" name="products" id="fruit-orchard" value="Fruit/Orchard" onClick={this.props.handleProduceValue} />
          <label htmlFor="fruit-orchard">Fruit/Orchard</label>
        </div>
        <div>
          <input type="radio" name="products" id="livestock" value="Livestock" onClick={this.props.handleProduceValue} />
          <label htmlFor="livestock">Livestock</label>
        </div>
        <div>
          <input type="radio" name="products" id="plants-flowers" value="Plants/Flowers" onClick={this.props.handleProduceValue} />
          <label htmlFor="plants-flowers">Plants/Flowers</label>
        </div>
        <div>
          <input type="radio" name="products" id="baker-grains" value="Baker/Grains" onClick={this.props.handleProduceValue} />
          <label htmlFor="baker-grains">Baker/Grains</label>
        </div>
        <div>
          <input type="radio" name="products" id="fish" value="Fish" onClick={this.props.handleProduceValue} />
          <label htmlFor="fish">Fish</label>
        </div>
        <div>
          <input type="radio" name="products" id="honey" value="Honey" onClick={this.props.handleProduceValue} />
          <label htmlFor="honey">Honey</label>
        </div>
        <div>
          <input type="radio" name="products" id="dairy-cheese" value="Dairy/Cheese" onClick={this.props.handleProduceValue} />
          <label htmlFor="dairy-cheese">Dairy/Cheese</label>
        </div>
        <div>
          <input type="radio" name="products" id="eggs-poultry" value="Eggs/Poultry" onClick={this.props.handleProduceValue} />
          <label htmlFor="eggs-poultry">Eggs/Poultry</label>
        </div>
        <div>
          <input type="radio" name="products" id="mushrooms" value="Mushrooms" onClick={this.props.handleProduceValue} />
          <label htmlFor="mushrooms">Mushrooms</label>
        </div>
        <div>
          <input type="radio" name="products" id="wine-beer-spirits" value="Wine/Beer/Spirits" onClick={this.props.handleProduceValue} />
          <label htmlFor="wine-beer-spirits">Wine/Beer/Spirits</label>
        </div>
        <div>
          <input type="radio" name="products" id="maplesyrup" value="Maple Syrup" onClick={this.props.handleProduceValue} />
          <label htmlFor="maplesyrup">Maple Syrup</label>
        </div>
        <div>
          <input type="radio" name="products" id="jams-pickles-preserves" value="Jams/Pickles/Preserves" onClick={this.props.handleProduceValue} />
          <label htmlFor="jams-pickles-preserves">Jams/Pickles/Preserves</label>
        </div>
      </div>
    );
  }
}

export default VendorProduceFilter;
