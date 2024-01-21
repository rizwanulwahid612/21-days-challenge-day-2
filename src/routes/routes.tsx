import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
// import App from '@/App';
// import Login from '@/pages/Login';
// import NotFound from '@/pages/NotFound';
// import Home from '@/pages/Home';
// import Products from '@/pages/Products';
// import Checkout from '@/pages/Checkout';
// import Signup from '@/pages/Signup';
// import ProductDetails from '@/pages/ProductDetails';
// import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: (<PrivateRoute>
          <Checkout />
        </PrivateRoute>) ,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;