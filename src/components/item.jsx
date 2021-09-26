import React, { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";
import StoreContext from "../context/storeContext";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addProductToCart = useContext(StoreContext).addProductToCart;

  const handleAdd = () => {
    console.log("adding to cart");
    let prodForCart = {
      ...props.data,
      quantity,
    };
    addProductToCart(prodForCart);
  };

  const handleQuantityChange = (val) => {
    console.log("quantity change", val);
    setQuantity(val);
  };

  const getControls = () => {
    return (
      <div className="item-controls">
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

        <button onClick={handleAdd} className="btn btn-sm btn-dark">
          Add to Cart
        </button>
      </div>
    );
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  return (
    <div className="item">
      <img src={"/images/" + props.data.image} alt=""></img>

      <h5>{props.data.title}</h5>

      <label className="item-price">
        Item Price: ${props.data.price.toFixed(2)}
      </label>
      <label className="item-total">Total: ${getTotal()} </label>

      {getControls()}
    </div>
  );
};

export default Item;
