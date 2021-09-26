import React, { useEffect, useState } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

const Catalog = () => {
  //state variables
  let [products, setProducts] = useState([]);
  let [itemsDisplayed, setItemsDisplayed] = useState([]);
  let [categories, setCategories] = useState([]);
  //logic (functions)
  const retrieveCatalog = async () => {
    let service = new ItemService();
    let cat = await service.getCatalog();
    setProducts(cat);
    setItemsDisplayed(cat);
    console.log(cat);

    let categories = [];
    for (let i = 0; i < cat.length; i++) {
      let prod = cat[i];

      if (!categories.includes(prod.category)) {
        categories.push(prod.category);
      }
    }

    setCategories(categories);
  };

  const handleFilter = (category) => {
    console.log("Filter", category);

    let filteredItems = [];
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];

      if (prod.category === category) {
        filteredItems.push(prod);
      }
    }

    setItemsDisplayed(filteredItems);
  };
  const handleClearFilters = () => {
    setItemsDisplayed(products);
  };
  //effect
  useEffect(() => {
    retrieveCatalog();
  }, []); // [] added to ensure logic will be called only once

  //return
  return (
    <div className="catalog-page">
      <h3>
        Check Out Our Catalog - Waiting to be customized to your Unique
        Inspiration!
      </h3>
      <h6>
        Currently we have a total of {products.length} customizable products to
        choose from!
      </h6>
      <div className="filters">
        {categories.map((cat) => {
          return (
            <button
              onClick={() => {
                handleFilter(cat);
              }}
              key={cat}
              className="btn btn-sm btn-secondary mx-1 my-2"
            >
              {cat}
            </button>
          );
        })}
        <button onClick={handleClearFilters} className="btn btn-sm btn-dark">
          Clear Filters
        </button>
      </div>

      <div className="item-container">
        {itemsDisplayed.map((prod) => (
          <Item key={prod._id} data={prod}></Item>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
