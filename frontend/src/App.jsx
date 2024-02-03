import Cart from "./Components/Cart/Cart";
import Homepage from "./Components/Homepage/Homepage";
import Main from "./Components/Main/Main";
import RestaurantPage from "./Components/RestaurantPage/RestaurantPage";
import AddressBlock from "./Components/Utils/AddressBlock/AddressBlock";
import "./index.css";
function App() {
    return (
        <div className="wrapper">
            {/* <Homepage /> */}
            {/* <Main/> */}
            {/* <RestaurantPage/> */}
            <Cart />
        </div>
    );
}

export default App;
