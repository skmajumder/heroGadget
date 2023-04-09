"use strict";

const fetchProductData = async () => {
    const response = await fetch("products.json");
    const data = await response.json();
    return data
};

export default fetchProductData;
