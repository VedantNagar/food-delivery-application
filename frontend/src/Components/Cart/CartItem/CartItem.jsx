import { useState } from "react";
import { addToCartUrl, removeFromCartUrl } from "../../../../urls/cartUrl";
import classes from "./CartItem.module.css";
import axios from "axios";

const CartItem = ({ from, title, price, quantity, foodID }) => {
  // Local state to track quantity
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const [disable,setDisable]=useState(false);

  // Function to handle increase in quantity
  const increase = async () => {
    setDisable(true);
    try {
      // Make a POST request to add item to cart
      const response = await axios.post(addToCartUrl, {
        foodID: foodID,
        quantityToAdd: 1,
      });
      console.log(response.data);
      // if(response.data.error)
      // return;
      // Update local quantity
      setLocalQuantity((prevQuantity) => prevQuantity + 1);
      
    } catch (error) {
      console.error("Error:", error);
    }
    setDisable(false);
  };

  // Function to handle decrease in quantity
  const decrease = async () => {
    // Handle decrease logic
    setDisable(true);
    try {
      // Make a POST request to add item to cart
      const response = await axios.post(removeFromCartUrl, {
        foodID: foodID,
        quantityToRemove: 1,
      });
      console.log(response.data);
      // if(response.data.error)
      // return;
      // Update local quantity
      setLocalQuantity((prevQuantity) => prevQuantity - 1);
    } catch (error) {
      console.error("Error:", error);
    }
    setDisable(false);

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
          <button onClick={decrease} disabled={disable}>-</button>
          <p>{localQuantity}</p>
          <button onClick={increase} disabled={disable}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
