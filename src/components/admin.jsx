import "./admin.css";
import { useState } from "react";
import ItemService from "../services/itemService";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [discount, setDiscount] = useState({});

  const discountTextChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    let copy = { ...discount };
    copy[name] = value;
    setDiscount(copy);
  };

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

  const registerCode = () => {
    console.log(discount);
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
    <div className="admin-page row">
      <h1>Store Manager</h1>
      <div className="new-product-form col">
        <h4>Create a New Product</h4>

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
          <button className="btn btn-info" onClick={createProduct}>
            Create Product
          </button>
        </div>
      </div>

      <div className="coupon-code col">
        <h4>Register Coupon Code:</h4>

        <div className="my-control">
          <label>Code:</label>
          <input type="text" name="couponCode" onChange={discountTextChange} />
        </div>

        <div className="my-control">
          <label>Discount:</label>
          <input
            type="text"
            name="couponDiscount"
            onChange={discountTextChange}
          />
        </div>

        <div className="my-control">
          <button className="btn btn-info" onClick={registerCode}>
            Register Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
