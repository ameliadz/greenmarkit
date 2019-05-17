import React, { Component } from "react";
import { getSingleVendor, updateVendor } from "../../services/vendorsService";
import VendorUpdateProducts from "../VendorUpdateProducts/VendorUpdateProducts";
import AddProductEntry from "../AddProductEntry/AddProductEntry";
import VendorCategoryFilter from "../VendorInfoForm/VendorCategoryFilter";
import VendorDaysFilter from "../VendorInfoForm/VendorDaysFilter";
import "./VendorUpdate.css";

class VendorUpdate extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      products: "",
      category: "",
      days: [],
      addEntry: true,
      newProduct: ""
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCategoryValue = this.handleCategoryValue.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.setProducts = this.setProducts.bind(this);
  }

  setProducts(data) {
    this.setState({
      id: data.id || this.state.id,
      name: data.name || this.state.name,
      products: data.products || this.state.products,
      category: data.category || this.state.category,
      days: data.days || this.state.category
    });
  }

  async componentDidMount() {
    const id = await parseInt(this.props.id);
    const data = await getSingleVendor(id);
    await this.setProducts(data.vendor);
  }

  handleTextInput(e) {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ [fieldName]: value });
  }

  handleCategoryValue(e) {
    this.setState({ category: parseInt(e.target.value) });
  }

  handleDaySelect(e) {
    const { days } = this.state;
    let checked = e.target.checked;
    let selectedDay = e.target.value;
    if (checked) {
      this.setState({
        days: [...days, selectedDay]
      });
    } else {
      let index = days.indexOf(selectedDay);
      if (index > -1) {
        days.splice(index, 1);
        this.setState({
          days: days
        });
      }
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    let { id, name, products, category, days } = this.state;
    const updated = await updateVendor({ id, name, products, category, days });
  }

  deleteEntry(e) {
    const productList = this.state.products.split(", ");
    productList.splice(productList.indexOf(e.target.name), 1);
    this.setState({ products: productList.join(", ") });
  }

  handleAdd(e) {
    this.setState({ addEntry: !this.state.addEntry });
  }

  handleSubmitAddProduct() {
    const newList = this.state.products + ", " + this.state.newProduct;
    this.setState({
      products: newList
    });
  }

  renderProductList() {
    return this.state.products
      .split(", ")
      .map(product => (
        <VendorUpdateProducts
          product={product}
          key={product.id}
          deleteEntry={this.deleteEntry}
        />
      ));
  }

  render() {
    return (
      <div>
        <h1 className="edit-vender-header">Edit Vendor</h1>
        <form className="vendor-update" onSubmit={this.handleSubmit}>
          <div>
              <label className="vendor-edit-label">Vendor Name</label>
            <input
              type="text"
              name="name"
              className="edit-vendor-input"
              placeholder="Enter Name Here"
              value={this.state.name}
              onChange={this.handleTextInput}
            />
          </div>
          <div className="vendor-edit-category">
            <VendorCategoryFilter
              handleCategoryValue={this.handleCategoryValue}
            />
            <div className="vendor-edit-days">
              <VendorDaysFilter handleDaysSelect={this.handleDaySelect} />
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="vendor-edit-submit-button"
          />
        </form>
        <div className="vendor-edit-product">
          <AddProductEntry
            state={this.state}
            addEntry={this.state.addEntry}
            handleAdd={this.handleAdd}
            handleTextInput={this.handleTextInput}
            renderProductList={this.renderProductList}
            setProducts={this.setProducts}
          />
          {this.renderProductList()}
          <input
          className="edit-vendor-add"
            id="addButton"
            type="button"
            value="Add Product"
            onClick={this.handleAdd}
          />
        </div>
      </div>
    );
  }
}

export default VendorUpdate;
