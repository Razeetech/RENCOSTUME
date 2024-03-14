import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import Listing from './Pages/ProductListing/Listing.jsx';
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx';
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
