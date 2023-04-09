import React, {useContext} from "react";
import {Link, useLoaderData} from "react-router-dom";
import CartItem from "./Cards/CartItem.jsx";
import {deleteShoppingCart, removeProductFromLocal} from "../utilities/fakedb";
import toast, {Toaster} from "react-hot-toast";
import {CartProductsContext} from "../App.jsx";

const Cart = () => {
    const [cart, setCart] = useContext(CartProductsContext)

    let totalProductsPrice = 0
    if (cart.length > 0) {
        for (const cartProduct of cart) {
            totalProductsPrice += (cartProduct.price * cartProduct.quantity)
        }
    }

    // Clear Cart
    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
        const notify = () => toast.error(`Clear cart successfully`);
        notify();
    }

    // Remove product from cart
    const handleRemoveItem = (productID, productName) => {
        removeProductFromLocal(productID)
        const remainingProducts = cart.filter(product => product.id !== productID)
        setCart(remainingProducts)
        const notify = () => toast.error(`${productName} remove successfully`);
        notify();
    }

    // Place the order
    const handlePlaceOrder = () => {
        if (cart.length > 0) {
            setCart([])
            deleteShoppingCart()
            const notify = () => toast.success(`Place order successfully`);
            notify();
        } else {
            const notify = () => toast.error(`Cart is empty`);
            notify();
        }
    }

    return (
        <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
                <h2 className="text-xl font-semibold">{cart.length ? 'Review Cart Items' : 'Cart is  Empty'}</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {cart.map((cartProduct) => (
                        <CartItem key={cartProduct.id} product={cartProduct} handleRemoveItem={handleRemoveItem}/>
                    ))}
                </ul>
                <div className="space-y-1 text-right"><p>Total amount: <span
                    className="font-semibold">{totalProductsPrice}$</span></p>
                    <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    {
                        cart.length > 0 ? (
                            <button onClick={handleClearCart} type="button" className="btn-outlined">Clear <span
                                className="sr-only sm:not-sr-only">Cart</span>
                            </button>
                        ) : (<Link to={'/shop'}>
                            <button type="button" className="btn-outlined">Back <span
                                className="sr-only sm:not-sr-only">To Shop</span>
                            </button>
                        </Link>)
                    }
                    <button onClick={handlePlaceOrder} type="button"
                            className="btn-primary">Place Order
                    </button>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Cart;
