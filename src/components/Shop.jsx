import React, {createContext, useContext} from "react";
import {useLoaderData} from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import {addToDB} from "../utilities/fakedb";
import toast, {Toaster} from "react-hot-toast";
import {CartProductsContext, ProductsContext} from "../App.jsx";

const Shop = () => {
    const products = useContext(ProductsContext)
    const [cart, setCart] = useContext(CartProductsContext)

    //   Add products to the cart
    const handleAddToCart = (product) => {
        let newCartProduct
        const {id: productID, name: productName} = product;

        const existing = cart.find(product => product.id === productID)
        if (existing) {
            product.quantity += 1
            newCartProduct = [...cart]
        } else {
            product.quantity = 1
            newCartProduct = [...cart, product]
        }
        setCart(newCartProduct)

        addToDB(productID);
        const notify = () => toast.success(`${productName} added successfully`);
        notify();
    };
    return (
        <div className="my-container">
            <div className="product-container">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <Toaster/>
        </div>
    );
};

export default Shop;
