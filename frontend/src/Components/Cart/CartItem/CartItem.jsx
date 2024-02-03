import classes from "./CartItem.module.css";
const CartItem = ({ from, title, price, quantity }) => {
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
                    <a>-</a>
                    <p>{quantity}</p>
                    <a>+</a>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
