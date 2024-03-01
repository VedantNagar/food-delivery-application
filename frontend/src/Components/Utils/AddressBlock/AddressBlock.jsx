import location from "../../Cart/images/location.svg";
const AddressBlock = ({ address }) => {
    return (
        <div className="border-2 border-dashed border-fudo-red w-fit p-6 rounded-xl lg:w-52 md:w-44 sm:w-40">
            <img src={location} alt="" />
            <p>{address}</p>
        </div>
    );
};
export default AddressBlock;
