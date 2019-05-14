import React, { Component } from "react";
import './VendorInfoForm.css'
import VendorProduceFilter from './VendorProduceFilter';
import VendorDaysFilter from './VendorDaysFilter';

class VendorInfoForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      products: '',
      produce: '',
    };

    this.handleProduceValue = this.handleProduceValue.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProduceValue(e) {
    this.setState({
      produce: e.target.value,
    });
  };

  handleTextInput(event) {
  const fieldName = event.target.name
  const value = event.target.value

  this.setState({ [fieldName]: value });
};

  handleSubmit(e) {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Vendor Information</h1>
        <form className="vendor-form" onSubmit={this.handleSubmit}>
          <div className="basic-info">
            <label>Vendor Name</label>
            <input type="text" name="name" onChange={this.handleTextInput} />
            <label>Products List</label>
            <input type="text" name="products-list" />
          </div>
          <div className="filters">
            <VendorProduceFilter
              handleProduceValue={this.handleProduceValue} />
            <VendorDaysFilter />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default VendorInfoForm;
