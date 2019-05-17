import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class VendorItem extends Component {
  render() {
    const { vendor } = this.props;
    return (
      <div className="vendor-item" key={vendor.id}>
        <h2>{vendor.name}</h2>
        <p>Products: {vendor.products}</p>
        <h3>Available:</h3>
        <ul>
          {vendor.days.map(day => (
            <li key={day.id}>{day.name}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            this.props.history.replace(`/vendors/${vendor.id}/`);
          }}
        >
          Edit
        </button>
        <button type="button" onClick={() => this.props.delete(vendor.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default withRouter(VendorItem);
