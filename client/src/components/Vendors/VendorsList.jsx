import React, { Component } from "react";
import "./VendorsList.css";
import { getVendors, deleteVendor } from '../../services/vendorsService';

class VendorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    }
    this.delete = this.delete.bind(this);
  }

  async componentDidMount() {
    const vendors = await getVendors();
    console.log(vendors);
    this.setState({vendors});
  }

  async delete(id) {
    console.log(id);
    const vendor = await deleteVendor(id);
    console.log(`deleted ${vendor.name}`);
    const { vendors } = this.state;
    vendors.splice(vendors.indexOf(vendor));
    this.setState({ vendors });
    // why isn't this making the vendor list refresh :(
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
                  <button type="button" onClick={() => this.delete(vendor.id)}>Delete</button>
                </div>
              )
            }) }
          </div>
      </div>
    );
  }
}

export default VendorsList;
