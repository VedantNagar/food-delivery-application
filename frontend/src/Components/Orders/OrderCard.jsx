
const OrderCard = ({fields}) => {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        
        // Add leading zeros if necessary
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
        
        return `${formattedDay}/${formattedMonth}/${year}`;
    }
    const dateString = fields?.createdAt;
const formattedDate = formatDate(dateString);
  return (
    <div className="border border-1 rounded-xl border-black w-full py-6 grid grid-cols-4 text-center">
        <h3 className="text-lg">{fields?.paymentMethod}</h3>
        <h3 className="text-lg">{formattedDate}</h3>
        <h3 className="text-lg">{fields?.orderStatus}</h3>
        <h3 className="text-lg">₹{fields?.totalAmount}</h3>
    </div>
  )
}
export default OrderCard