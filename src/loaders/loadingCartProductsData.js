'use strict'

import {getStoredShoppingCart} from "../utilities/fakedb.js";

const getCartProductsData = async () => {
    // Get all the products from DB or JSON file
    const response = await fetch("products.json");
    const products = await response.json();

    // Get shopping cart from local storage
    const cartDataLocal = getStoredShoppingCart();

    const cartProducts = []
    for (const [productID, productQuantity] of Object.entries(cartDataLocal)) {
        const foundProduct = products.find((p) => p.id === productID);
        if (foundProduct) {
            foundProduct.quantity = productQuantity;
            cartProducts.push(foundProduct)
        }
    }
    return cartProducts
}

export default getCartProductsData