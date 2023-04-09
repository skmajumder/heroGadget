import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";
import fetchProductData from "./loaders/loadingProductsData";
import Cart from "./components/Cart";
import getCartProductsData from "./loaders/loadingCartProductsData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "shop", element: <Shop/>, loader: fetchProductData},
            {path: "cart", element: <Cart/>, loader: getCartProductsData},
            {path: "about", element: <About/>},
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
