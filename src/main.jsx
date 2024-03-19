import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import Listing from './Pages/ProductListing/Listing.jsx';
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx';
import Cart from './Components/Cart/Cart.jsx'
import Home from './Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/gallery',
        element: <Listing />
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  },
  {
    path: '/products/:productId',
    element: <ProductDetail />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
