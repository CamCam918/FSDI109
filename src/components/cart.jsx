import "./cart.css";
import React, { useState, useContext } from "react";
import storeContext from "../context/storeContext";
import { Link } from "react-router-dom";
import ItemOnCart from "./itemOnCart";

const Cart = () => {
  const cart = useContext(storeContext).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.price * prod.quantity;
    }

    return total.toFixed(2);
  };

  if (!cart.length) {
    return (
      <div>
        Nothing Here right now! Go ahead and change that.
        <Link className="nav-link" to="/catalog">
          Click Here
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Ready for Checkout?</h1>
      <h5>Your cart currently contains {cart.length} item(s)</h5>
      <hr />

      <div className="row">
        <div className="col-9 cart-container">
          <ul>
            {cart.map((prod) => (
              <ItemOnCart key={prod._id} data={prod}></ItemOnCart>
            ))}
          </ul>
        </div>
        <div className="col-2 total-container py-3">
          <h4>Order Total:</h4>
          <h3>$ {getTotal()}</h3>
          <hr />
          <button className="btn btn-block btn-primary">Submit Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
