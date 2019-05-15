import React, { Component } from "react";
import "./VendorsList.css";
import { getVendors } from '../../services/vendorsService';

class VendorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    }
  }

  async componentDidMount() {
    const vendors = await getVendors();
    console.log(vendors);
    this.setState({vendors});
  }

  render() {
    let { vendors } = this.state;
    return (
      <div>
        <h1>Vendors List</h1>
        <div className="vendor-list">
          { vendors.map(vendor => {
              return (
                <div className="vendor-item" key={vendor.id}>
                  <h2>{vendor.name}</h2>
                  <p>Products: {vendor.products}</p>
                  <p>Category: {vendor.category.name}</p>
                  <button type="button">Edit</button>
                  <button type="button">Delete</button>
                </div>
              )
            }) }
          </div>
      </div>
    );
  }
}

export default VendorsList;
