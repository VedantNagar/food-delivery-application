import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import SignIn from "./Components/Signin/Signin";
import HomePage from "./Components/Homepage/Homepage";
import RestaurantPage from "./Components/RestaurantPage/RestaurantPage";
import { UserContextProvider } from "./userContext/context.jsx";
import "./App.css";
import SearchedResults from "./Components/SearchedResults/SearchedResults.jsx";
import Root from "./Components/Root/Root.jsx";
import axios from "axios";
import { UtilityContextProvider } from "./userContext/utilityContext.jsx"; //
import Order from "./Components/Orders/Order.jsx";
import AdminRoot from "./Components/Admin/AdminRoot.jsx";
import AdminRestaurants from "./Components/Admin/AdminRestaurants/AdminRestaurants.jsx";
import RestaurantOrders from "./Components/Admin/AdminRestaurantOrders/RestaurantOrders.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <SignIn />,
            },
            {
                path: "homepage",
                element: <HomePage />,
            },
            {
                path: "homepage/results/:resultName",
                element: <SearchedResults />,
            },
            {
                path: "homepage/:restaurantId",
                element: <RestaurantPage />,
            },
            {
                path: "homepage/cart",
                element: <Cart />,
            },
            {
                path: "homepage/orders",
                element: <Order />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                index: true,
                element: <AdminRestaurants />,
            },
            {
                path: "orders",
                element: <RestaurantOrders />,
            },
        ],
    },
]);
function App() {
    axios.defaults.withCredentials = true;
    return (
        <div className="wrapper">
            <UtilityContextProvider>
                <UserContextProvider>
                    <RouterProvider router={router} />
                </UserContextProvider>
            </UtilityContextProvider>
        </div>
    );
}

export default App;
