import React, { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    id: 71065,
    name: "Cameron Campbell",
    email: "test@testmail.com",
  });

  const addToCart = (product) => {
    var copy = [...cart];

    let found = false;
    for (let i = 0; i < copy.length; i++) {
      let prod = copy[i];
      if (prod._id === product._id) {
        found = true;
        prod.quantity += product.quantity;
      }
    }
    if (!found) {
      copy.push(product);
    }
    console.log(product);
    setCart(copy);
    //TODO: Store cart in LocalStorage
  };

  const removeFromCart = (productID) => {
    let copy = [...cart];
    for (let i = 0; i < copy.length; i++) {
      let prod = copy[i];
      if (prod._id === productID) {
        //remove prod from array
        copy.splice(i, 1);
        break; //do not continue
      }
    }
    setCart(copy);
  };

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addToCart,
        removeProductFromCart: removeFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalState;
