import React, { Component } from 'react';

function VendorUpdateProducts(props) {
  return (
    <div>
      <h1>{props.product}</h1>
      <input
        name={props.product}
        type="button" 
        value="Delete" 
        onClick={props.deleteEntry}
      />
    </div>
  )
}

export default VendorUpdateProducts;
