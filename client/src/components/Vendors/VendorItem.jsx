import React from 'react';

export default function VendorItem(props) {
  const { vendor } = props;
  console.log(vendor.days);
  return (
    <div className="vendor-item" key={vendor.id}>
      <h2>{vendor.name}</h2>
      <p>Products: {vendor.products}</p>
      <ul>{vendor.days.map(day => <li key={day.id}>{day.name}</li>)}</ul>
      <button type="button">Edit</button>
      <button type="button" onClick={() => this.delete(vendor.id)}>
        Delete
      </button>
    </div>
  );
};
