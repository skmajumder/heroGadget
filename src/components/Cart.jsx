import React from "react";
import {getStoredShoppingCart} from "../utilities/fakedb";
import {useLoaderData} from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Cart = () => {
    // Get shopping cart from local storage
    const cartDataLocal = getStoredShoppingCart();
    const products = useLoaderData();

    const cartProducts = [];
    if (cartDataLocal && products.length !== 0) {
        for (const [productID, productQuantity] of Object.entries(cartDataLocal)) {
            const foundProduct = products.find((p) => p.id === productID);
            if (foundProduct) {
                foundProduct.quantity = productQuantity;
                cartProducts.push(foundProduct);
            }
        }
    }

    return (
        <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
                <h2 className="text-xl font-semibold">Review Cart Items</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {cartProducts.map((cartProduct) => (
                        <CartItem key={cartProduct.id} product={cartProduct}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cart;
