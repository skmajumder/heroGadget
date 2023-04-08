// Get prev products data from local storage
const getStoredShoppingCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shopping-cart");
    storedCart && (shoppingCart = JSON.parse(storedCart));
    return shoppingCart;
};

// Add products data to the local storage
const addToDB = (productID) => {
    const shoppingCart = getStoredShoppingCart();
    // check if product has quantity
    let quantity = shoppingCart[productID];
    quantity ? quantity++ : (quantity = 1);
    shoppingCart[productID] = quantity;
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// Delete shopping cart from local storage
const deleteShoppingCart = () => {
    localStorage.removeItem("shopping-cart");
};

export {getStoredShoppingCart, addToDB, deleteShoppingCart};
