import classes from "./Card.module.css";
const Card = ({img,title,desc}) => {
    return (
        <div className={classes.card}>
            <img src={img} alt="not found" />
            <h3>{title}</h3>
            <p>
                {desc}
            </p>
        </div>
    );
};
export default Card;
