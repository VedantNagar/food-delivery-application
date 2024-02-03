import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Homepage from "./Components/Homepage/Homepage";
import Main from "./Components/Main/Main";
import RestaurantPage from "./Components/RestaurantPage/RestaurantPage";
import AddressBlock from "./Components/Utils/AddressBlock/AddressBlock";
import "./index.css";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/signin",
        element: <Main />,
    },
    {
        path: "/restaurant-page",
        element: <RestaurantPage />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);
function App() {
    return (
        <div className="wrapper">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
