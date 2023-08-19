import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/rootLayout/RootLayout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/createAccount/CreateAccount";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <CreateAccount />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
