'use strict'

import {getStoredShoppingCart} from "../utilities/fakedb.js";
import fetchProductData from "./loadingProductsData.js";

// Get shopping cart from local storage
const cartDataLocal = getStoredShoppingCart();

const getCartProductsData = async () => {
    if (cartDataLocal) {
        // Get all the products from DB or JSON file
        const response = await fetch("products.json");
        const products = await response.json();
        const cartProducts = []
        for (const [productID, productQuantity] of Object.entries(cartDataLocal)) {
            const foundProduct = products.find((p) => p.id === productID);
            if (foundProduct) {
                foundProduct.quantity = productQuantity;
                cartProducts.push(foundProduct)
            }
        }
        return {cartProducts, products}
    }
}

export default getCartProductsData