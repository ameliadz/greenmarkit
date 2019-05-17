import React, { Component } from "react";
import "./VendorsList.css";
import { getVendors, deleteVendor } from "../../services/vendorsService";
import VendorItem from './VendorItem';

class VendorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      filteredVendors: []
    };
    this.delete = this.delete.bind(this);
    this.filter = this.filter.bind(this);
  }

  filter(type) {
    const allVendors = this.state.vendors
    console.log(typeof type)
    let filteredVendors = []

    switch(type) {
      case 'category':
        console.log('type is category');
        filteredVendors = allVendors.filter(vendor => vendor.categoryId === 2)
      break;
        case 'days':
        const dayIds = [1,3]
        console.log('type is days');
        filteredVendors = allVendors.filter(vendor => vendor.days.some(day => dayIds.includes(day.id)));
        console.log(filteredVendors)
        return filteredVendors;
      break;
      default:
        console.log('type is name or products, (default)');
        filteredVendors = allVendors.filter(vendor => vendor[`${type}`].toLowerCase().includes('honey'))
        break;
    }
        this.setState({ filteredVendors });
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
    const vendors = await getVendors();
    vendors.splice(vendors.indexOf(vendor), 1);
    this.setState({ vendors });
    // why isn't this making the vendor list refresh :(
  }

  renderVendors(vendors) {
    return vendors.map((vendor, index) => <VendorItem vendor={vendor} key={index} delete={this.delete}/>)
  }

  render() {
    let { vendors, filteredVendors } = this.state;
    return (
      <div className="vendors">
        <input data-type="days" type="button" value="filter by name" id="name" onClick={(e) => this.filter(e.target.dataset.type)}/>

        <h1>Producer List</h1>
        <div className="vendor-list">
            {filteredVendors.length ? this.renderVendors(filteredVendors) : this.renderVendors(vendors)}
        </div>
      </div>
    );
  }
}

export default VendorsList;
