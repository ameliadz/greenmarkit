import React, { Component } from "react";
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
    this.setState({vendors});
  }

  renderVendors() {
    const { vendors } = this.state;
    vendors.map(vendor => {
      return (
        <div className="vendor-item" key={vendor.id}>
          <h2>{vendor.name}</h2>
          <p>Products: {vendor.products}</p>
          <p>Category: {vendor.produce.name}</p>
        </div>
      )
    })
  }

  render() {
    const { vendors } = this.state;
    return (
      <div>
        <h1>Vendors List</h1>
        {vendors.map(vendor => {
          return (
            <div className="vendor-item" key={vendor.id}>
              <h2>{vendor.name}</h2>
              <p>Products: {vendor.products}</p>
              <p>Category: {vendor.produce.name}</p>
          </div> )})}
      </div>
    );
  }
}

export default VendorsList;
