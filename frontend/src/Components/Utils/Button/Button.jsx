
const Button = ({onClick,title,type}) => {
  return (
    <button onClick={onClick} className="bg-fudo-red text-white rounded-lg py-4 px-6 cursor-pointer" type={type}>{title}</button>
    /* 
    
      className={`${
        disabled == false ? "bg-red-400 point cursor-not-allowed" : "bg-fudo-red"
      } text-white rounded-lg py-4 px-6 cursor-pointer`}

    */
  )
}
export default Button