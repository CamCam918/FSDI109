import "./admin.css";
import { useState } from "react";
import ItemService from "../services/itemService";

const Admin = () => {
  const [product, setProduct] = useState({});

  const textChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    //create a copy of the object
    let copy = { ...product }; //create a hard copy of an object
    //modify the copy
    copy[name] = value;
    //set the copy to the state
    setProduct(copy);
  };

  const createProduct = () => {
    console.log(product);
    var copy = { ...product };
    copy.price = parseFloat(copy.price);
    copy.discount = parseFloat(copy.discount);
    copy.minimum = parseFloat(copy.minimum);
    let service = new ItemService();
    service.saveItem(copy);
  };

  return (
    <div className="admin-page">
      <h1>Store Manager</h1>

      <div className="capture-form">
        <label>Title: </label>
        <input type="text" name="title" onChange={textChange} />
      </div>

      <div className="capture-form">
        <label>Price: </label>
        <input type="text" name="price" onChange={textChange} />
      </div>

      <div className="capture-form">
        <label>Category: </label>
        <input type="text" name="category" onChange={textChange} />
      </div>

      <div className="capture-form">
        <label>Image Name: </label>
        <input type="text" name="image" onChange={textChange} />
      </div>

      <div className="capture-form">
        <label>Discount: </label>
        <input type="text" name="discount" onChange={textChange} />
      </div>

      <div className="capture-form">
        <label>Minimum: </label>
        <input type="text" name="minimum" onChange={textChange} />
      </div>

      <div className="btn-register">
        <button className="btn-large btn-primary" onClick={createProduct}>
          Create Product
        </button>
      </div>
    </div>
  );
};

export default Admin;
