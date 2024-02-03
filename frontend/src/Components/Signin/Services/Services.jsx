import classes from "./Services.module.css";
import card1 from "../../../images/service-1.svg";
import card2 from "../../../images/service-2.svg";
import card3 from "../../../images/service-3.svg";
import Card from "./Card";
const cards = [
    {
        img: card1,
        title: "Easy to Order",
        desc: "You only need a few steps in ordering food",
    },
    {
        img: card2,
        title: "Fastest Delivery",
        desc: " Delivery that is always ontime even faster",
    },
    {
        img: card3,
        title: "Best Quality",
        desc: "Not only fast for us quality is also number one",
    },
];
const Services = () => {
    return (
        <div className={classes.container}>
            <h3 className={classes.header}>What we serve</h3>
            <h1>
                Your Favourite Food <br />
                Delivery Partner
            </h1>
            <div className={classes.cards}>
                {cards.map((item) => {
                    return (
                        <Card
                        key={item.title}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Services;
