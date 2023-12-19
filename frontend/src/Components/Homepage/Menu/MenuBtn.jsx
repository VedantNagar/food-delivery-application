import classes from "./MenuBtn.module.css";
const MenuBtn = ({img,title,onClick}) => {
    return (
        <div className={classes.menuBtn} onClick={onClick}>
            <img src={img} alt="not found" />
            <h3>{title}</h3>
        </div>
    );
};
export default MenuBtn;
