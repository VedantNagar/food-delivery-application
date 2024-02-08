import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import SignIn from './Components/Signin/Signin';
import HomePage from './Components/Homepage/Homepage';
import RestaurantPage from './Components/RestaurantPage/RestaurantPage';
import { UserContextProvider } from './userContext/context.jsx';
import './index.css';
const router = createBrowserRouter([

  {
    index: true,
    element: <SignIn />,
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/restaurant-page',
    element: <RestaurantPage />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);
function App() {
  return (
    <div className='wrapper'>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
}

export default App;
