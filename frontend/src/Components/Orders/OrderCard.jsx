import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect, useContext } from "react";
import { deleteOrderUrl } from "../../../urls/orderUrl";
import axios from "axios";
import { RxCross2, RxFontSize } from "react-icons/rx";
import { foodContext } from "../../userContext/foodContext";
const OrderCard = ({ fields, orderID }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const {render, setRender} = useContext(foodContext);
    const cancelOrder = async (orderID) => {
        const response = await axios.patch(deleteOrderUrl, {
            orderId: orderID,
        });
        setRender(!render);
        console.log(response);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // Add leading zeros if necessary
        const formattedDay = day < 10 ? "0" + day : day;
        const formattedMonth = month < 10 ? "0" + month : month;

        return `${formattedDay}/${formattedMonth}/${year}`;
    }
    const dateString = fields?.createdAt;
    const formattedDate = formatDate(dateString);
    return (
        <div>
            <Accordion className="border border-fudo-red border-dashed rounded-4xl">
                <AccordionSummary
                    expandIcon={windowWidth > 385 ? <ExpandMoreIcon /> : null}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <button
                        onClick={() => cancelOrder(orderID)}
                        className="flex flex-col justify-center items-center text-xs"
                    >
                        <RxCross2
                            color="#EB5757"
                            style={{ fontSize: "2rem" }}
                        />
                        Cancel
                    </button>
                    <div className="w-full py-6 grid grid-cols-4 text-center md:text-lg iPhone11:text-xs gap-10">
                        <h3>{fields?.paymentMethod}</h3>
                        <h3>{formattedDate}</h3>
                        <h3>{fields?.orderStatus}</h3>
                        <h3>₹{fields?.totalAmount}</h3>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <hr />
                    <h1 className="text-xl mb-2">What you've ordered :</h1>

                    {fields?.items?.map((item, index) => {
                        return (
                            <ul key={item._id}>
                                <li className="w-full flex">
                                    <span>
                                        {index + 1}. {item?.food?.name}
                                    </span>
                                    <span className="flex-1 text-right text-fudo-red">
                                        x{item?.quantity}
                                    </span>
                                </li>
                            </ul>
                        );
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
export default OrderCard;
