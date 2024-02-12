import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import SignIn from "./Components/Signin/Signin";
import HomePage from "./Components/Homepage/Homepage";
import RestaurantPage from "./Components/RestaurantPage/RestaurantPage";
import { UserContextProvider } from "./userContext/context.jsx";
import "./index.css";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Test from "./Test";
const router = createBrowserRouter([
    {
        index: true,
        element: <SignIn />,
    },
    {
        path: "/homepage",
        element: <HomePage />,
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "homepage/:restaurantId",
        element: <RestaurantPage />,
    },
    {
        path: "restaurantId",
        element: <RestaurantPage />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/test",
        element: <Test />,
    },
]);
function App() {
    return (
        <div className="wrapper">
            <UserContextProvider>
                <RouterProvider router={router} />
            </UserContextProvider>
        </div>
    );
}

export default App;
