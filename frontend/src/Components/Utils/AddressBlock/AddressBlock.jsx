import classes from "./AddressBlock.module.css"
import location from '../../Cart/images/location.svg'
const AddressBlock = ({address}) => {
  return (
    <div className={classes.addrsBlock}>
        <img src={location} alt="" />
        <p>{address}</p>
    </div>
  )
}
export default AddressBlock