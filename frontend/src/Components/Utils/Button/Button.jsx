import classes from "./Button.module.css"
const Button = ({onClick,title}) => {
  return (
    <button onClick={onClick} className={classes.proceedBtn}>{title}</button>
  )
}
export default Button