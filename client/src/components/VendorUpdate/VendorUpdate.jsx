import React, { Component } from 'react'; 
import VendorCategoryFilter from '.VendorCategoryFilter';
import VedorDaysFilter from '.VendorDaysFilter';

class VendorUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      products: '',
      category: '',
      days: [],
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCategoryValue = this.handleCategoryValue.bind(this);
    this.HandleDaySelect = this.handleDaySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextInput(e) {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ [fieldName]: value });
  };

  handleCategoryValue(e) {
    this.setState({ category: parseInt(e.target.value) });
  };

  handleDaySelect(e) {
    const { days } = this.state;
    let checked = e.target.checked;
    let selectedDay = e.target.value;
    if (checked) {
      this.setState({
        days: [...days, selectedDay],
      });
    } else {
      let index = days.indexOf(selectedDay);
      if (index > -1) {
        days.splice(index, 1);
        this.setState({
          days: days
        })
      }
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    let { name, products, category, days } = this.state;
    updateVendor({ name, products, category, days });
  };

  render () {
    return (
      <div>
        <h1>Edit Vendor</h1>
        <form className="vendor-update" onSubmit={this.handleSubmit}>
          <div>
            <label>Vendor Name</label>
            <input type="text" name="name" onChange={this.handleTextInput} />
            <label>Products List</label>
            <input type="text" name="products" onChange={this.handleTextInput} />
          </div>
          <div>
            <VendorCategoryFilter handleDaySelect={this.handleDaySelect} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
};

export default VendorUpdate;
