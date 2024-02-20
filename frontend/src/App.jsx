import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import SignIn from "./Components/Signin/Signin";
import HomePage from "./Components/Homepage/Homepage";
import RestaurantPage from "./Components/RestaurantPage/RestaurantPage";
import { UserContextProvider } from "./userContext/context.jsx";
import "./index.css";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import SearchedResults from "./Components/SearchedResults/SearchedResults.jsx";
import Root from "./Components/Root/Root.jsx";
import axios from 'axios'
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
                path: "homepage/results",
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
        ],
    },
    {
        path: "restaurantId",
        element: <RestaurantPage />,
    },

    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);
function App() {
    

axios.defaults.withCredentials = true
    return (
        <div className="wrapper">
            <UserContextProvider>
                <RouterProvider router={router} />
            </UserContextProvider>
        </div>
    );
}

export default App;
