import React from "react";
import "../VendorUpdate/VendorUpdate.css";

function AddProductEntry(props) {
  if (props.addEntry === true) {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.setProducts({
              products: props.state.products + ", " + props.state.newProduct
            });
            props.renderProductList();
            props.handleAdd();
          }}
        >
          <label className="enter-product">Enter Product</label>
          <input
            onChange={props.handleTextInput}
            type="text"
            name="newProduct"
            value={props.state.newProduct}
          />
          <input type="submit" value="Add" className="edit-vendor-add" />
        </form>
      </div>
    );
  } else {
    return null;
  }
}

export default AddProductEntry;
