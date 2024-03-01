
const Button = ({onClick,title,type}) => {
  return (
    <button onClick={onClick} className="bg-fudo-red text-white rounded-lg py-4 px-6 cursor-pointer" type={type}>{title}</button>
  )
}
export default Button