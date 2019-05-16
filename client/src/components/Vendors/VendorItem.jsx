import React from 'react';
import { Redirect } from 'react-router-dom';

export default function VendorItem(props) {
  const { vendor } = props;
  return (
    <div className="vendor-item" key={vendor.id}>
      <h2>{vendor.name}</h2>
      <p>Products: {vendor.products}</p>
      <h3>Available:</h3>
      <ul>{vendor.days.map(day => <li key={day.id}>{day.name}</li>)}</ul>
      <button type="button" onClick={() => <Redirect to={`/vendors/edit/${vendor.id}`} />}>Edit</button>
      <button type="button" onClick={() => props.delete(vendor.id)}>
        Delete
      </button>
    </div>
  );
};
