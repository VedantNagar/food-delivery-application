import { useState } from "react";
import { addToCartUrl, removeFromCartUrl } from "../../../../urls/cartUrl";
import classes from "./CartItem.module.css";
import axios from "axios";

const CartItem = ({ from, title, price, quantity, foodID }) => {
  // Local state to track quantity
  const [localQuantity, setLocalQuantity] = useState(quantity);

  // Function to handle increase in quantity
  const increase = async () => {
    try {
      // Make a POST request to add item to cart
      const response = await axios.post(addToCartUrl, {
        foodID: foodID,
        quantityToAdd: 1,
      });
      console.log(response.data);
      // Update local quantity
      setLocalQuantity((prevQuantity) => prevQuantity + 1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle decrease in quantity
  const decrease = async () => {
    // Handle decrease logic
    try {
      // Make a POST request to add item to cart
      const response = await axios.post(removeFromCartUrl, {
        foodID: foodID,
        quantityToAdd: 1,
      });
      console.log(response.data);
      // Update local quantity
      setLocalQuantity((prevQuantity) => prevQuantity - 1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Ensure that the component doesn't re-render unnecessarily
  return (
    <div className={classes.cartItem}>
      <div className={classes.from}>
        from <span>{from}</span>
      </div>
      <div className={classes.item}>
        <div className={classes.left}>
          <p>{title}</p>
          <span className={classes.price}>₹{price}</span>
        </div>
        <div className={classes.right}>
          <a onClick={decrease}>-</a>
          <p>{localQuantity}</p>
          <a onClick={increase}>+</a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
