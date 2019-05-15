import React, { Component } from 'react'; 
import { getSingleVendor } from '../../services/vendorsService';
import VendorUpdateProducts from '../VendorUpdateProducts/VendorUpdateProducts';

class VendorUpdate extends Component {
  constructor() {
    super();
    this.state = {
      id: '',   
      name: '',
      products: '',
      category: '',
      days: [],
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCategoryValue = this.handleCategoryValue.bind(this);
    this.HandleDaySelect = this.handleDaySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }



  async componentDidMount() {
    const id = await parseInt(this.props.id);
    const data = await getSingleVendor(id);
    this.setState({
      id: data.vendor.id,
      name: data.vendor.name,
      products: data.vendor.products,
      category: data.vendor.category,
      days: data.vendor.days
    })
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
    //updateVendor({ name, products, category, days });
  };

  deleteEntry(e) {
    const productList = this.state.products.split(", ")
    productList.splice(productList.indexOf(e.target.name), 1);
    this.setState({ products: productList.join(', ')});
  };

  render () {
    const productList = this.state.products.split(", ").map(product => <VendorUpdateProducts product={product} key={product.id} deleteEntry={this.deleteEntry}/>);
    console.log(productList);
    return (
      <div>
        <h1>Edit Vendor</h1>
        <form className="vendor-update" onSubmit={this.handleSubmit}>
          <div>
            <label>Vendor Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleTextInput} />
            <label>Products List</label>
            <input type="text" name="products" onChange={this.handleTextInput} />
          </div>
          <input type="submit" value="Submit" />
        </form>
          {productList}
      </div>
    );
  };
};

export default VendorUpdate;
