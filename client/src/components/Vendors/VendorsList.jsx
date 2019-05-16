import React, { Component } from "react";
import "./VendorsList.css";
import { getVendors, deleteVendor } from "../../services/vendorsService";
import VendorItem from './VendorItem';

class VendorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    };
    this.delete = this.delete.bind(this);
  }

  async componentDidMount() {
    const vendors = await getVendors();
    console.log(vendors);
    this.setState({ vendors });
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
      <div className="vendors">
        <h1>Producer List</h1>
        <div className="vendor-list">
          {vendors.map((vendor, index) => <VendorItem vendor={vendor} key={index} />)}
        </div>
      </div>
    );
  }
}

export default VendorsList;
