import React from "react";

export default React.createContext({
  cart: [],
  user: {},

  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
