"use strict";

const fetchProductData = async () => {
  const response = await fetch("products.json");
  const products = await response.json();
  return products;
};

export default fetchProductData;
