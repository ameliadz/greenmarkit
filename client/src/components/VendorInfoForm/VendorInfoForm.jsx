import React, { Component } from "react";
import './VendorInfoForm.css'
import VendorCategoryFilter from './VendorCategoryFilter';
import VendorDaysFilter from './VendorDaysFilter';
import { Redirect } from 'react-router-dom';

import { createVendor, getDays } from '../../services/vendorsService';

class VendorInfoForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      products: '',
      category: '',
      days: [],
      allDays: [],
      redirect: false
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCategoryValue = this.handleCategoryValue.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  async componentDidMount() {
    let allDays = await getDays();
    this.setState({allDays})
  }

  handleTextInput(e) {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ [fieldName]: value });
  };

  handleCategoryValue(e) {
    this.setState({ category: parseInt(e.target.value) });
  };

  handleDaySelect(e){
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
  }

  async handleSubmit(e) {
    e.preventDefault();
    let { name, products, category, days } = this.state;
    await createVendor({ name, products, category, days });
    this.setState({redirect: true})
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/vendors" />
    }
    return (
      <div className="info">
        <h1>Producer Information</h1>
        <form className="vendor-form" onSubmit={this.handleSubmit}>
          <div className="basic-info">
            <label>Producer Name</label>
            <input type="text" name="name" onChange={this.handleTextInput} required/>
            <label>Products List</label>
            <input type="text" name="products" onChange={this.handleTextInput} required/>
          </div>
          <div className="filters">
            <VendorCategoryFilter
              handleCategoryValue={this.handleCategoryValue} />
            <VendorDaysFilter
              handleDaySelect={this.handleDaySelect} allDays={this.state.allDays} days={this.state.days} />
          </div>
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default VendorInfoForm;
