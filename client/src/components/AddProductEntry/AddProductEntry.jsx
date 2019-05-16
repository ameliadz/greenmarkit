import React, { Component } from 'react';

function AddProductEntry(props) {
  if (props.addEntry === true ) {
    return (
      <div>
        <form>
          <label>Enter Product</label>
          <input 
            onChange={props.handleTextInput}
            type="text" 
            name="newProduct" 
            value={props.state.newProduct}
          />
          <input 
            type="button" 
            onClick={() => console.log('product added')} 
            value="Add"
          />
        </form>
      </div>
    )
  } else {
    return null;
  }
}

export default AddProductEntry;
