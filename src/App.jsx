import React, {createContext, useState} from "react";
import Header from "./components/Header";
import {Outlet, useLoaderData} from "react-router-dom";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export const ProductsContext = createContext([])
export const CartProductsContext = createContext([])

const App = () => {
    const {cartProducts, products} = useLoaderData()
    const [cart, setCart] = useState(cartProducts)
    const [isOpen, setIsOpen] = useState(false)

    // Session storage
    const cartAlert = sessionStorage.getItem('alert')
    if (cart.length > 0 && cartAlert !== 'true') {
        setIsOpen(true)
        sessionStorage.setItem('alert', 'true')
    }
    return (
        <>
            <ProductsContext.Provider value={products}>
                <CartProductsContext.Provider value={[cart, setCart]}>
                    <Header/>
                    <main className="main min-h-[calc(100vh-137px)]">
                        <Outlet/>
                    </main>
                    <Footer/>
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
                </CartProductsContext.Provider>
            </ProductsContext.Provider>
        </>
    );
};

export default App;
