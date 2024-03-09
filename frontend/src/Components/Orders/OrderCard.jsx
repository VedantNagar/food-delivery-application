import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
const OrderCard = ({ fields }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
