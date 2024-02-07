import classes from "./Button.module.css"
const Button = ({onClick,title,type}) => {
  return (
    <button onClick={onClick} className={classes.proceedBtn} type={type}>{title}</button>
  )
}
export default Button