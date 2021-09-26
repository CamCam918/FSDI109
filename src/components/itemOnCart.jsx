import "./itemOnCart.css";
import { useContext } from "react";
import storeContext from "../context/storeContext";
const ItemOnCart = (props) => {
  const removeFromCart = useContext(storeContext).removeProductFromCart;

  const getTotal = () => {
    let total = props.data.price * props.data.quantity;
    return total.toFixed(2);
  };

  const handleRemove = () => {
    removeFromCart(props.data._id);
  };

  return (
    <div className="item-on-cart">
      <div className="cart-item-img">
        <img src={"/images/" + props.data.image} alt=""></img>
      </div>

      <div className="cart-item-info">
        <h3>{props.data.title}</h3>
        <h5>{props.data.category}</h5>
      </div>

      <label>{props.data.price.toFixed(2)}</label>
      <label>{props.data.quantity}</label>
      <label className="total">${getTotal()}</label>

      <button onClick={handleRemove} className="btn btn-sm btn-outline-danger">
        Remove
      </button>
    </div>
  );
};

//saved changes
export default ItemOnCart;

//console log the product _id when clicked on remove btn
//connect to the global state
//get the removeFromCart action
//call removeFromCart and pass product _id
