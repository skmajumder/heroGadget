import React from "react";
import {useLoaderData} from "react-router-dom";
import CartItem from "./Cards/CartItem.jsx";

const Cart = () => {
    const cartProducts = useLoaderData();

    let totalProductsPrice = 0
    if (cartProducts.length > 0) {
        for (const cartProduct of cartProducts) {
            totalProductsPrice += (cartProduct.price * cartProduct.quantity)
        }
    }

    return (
        <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
                <h2 className="text-xl font-semibold">{cartProducts.length ? 'Review Cart Items' : 'Cart is  Empty'}</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {cartProducts.map((cartProduct) => (
                        <CartItem key={cartProduct.id} product={cartProduct}/>
                    ))}
                </ul>
                <div className="space-y-1 text-right"><p>Total amount: <span
                    className="font-semibold">{totalProductsPrice}$</span></p>
                    <p className="text-sm text-gray-400">Not including taxes and shipping costs</p></div>
            </div>
        </div>
    );
};

export default Cart;
