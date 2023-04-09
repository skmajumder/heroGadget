import React, {createContext, useState} from "react";
import Header from "./components/Header";
import {Outlet, useLoaderData} from "react-router-dom";
import Footer from "./components/Footer";

export const ProductsContext = createContext([])
export const CartProductsContext = createContext([])

const App = () => {
    const {cartProducts, products} = useLoaderData()
    const [cart, setCart] = useState(cartProducts)
    return (
        <>
            <ProductsContext.Provider value={products}>
                <CartProductsContext.Provider value={[cart, setCart]}>
                    <Header/>
                    <main className="main min-h-[calc(100vh-137px)]">
                        <Outlet/>
                    </main>
                    <Footer/>
                </CartProductsContext.Provider>
            </ProductsContext.Provider>
        </>
    );
};

export default App;
