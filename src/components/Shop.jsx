import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utilities/fakedb";
import toast, { Toaster } from "react-hot-toast";

const Shop = () => {
  const products = useLoaderData();
  //   Add products to the cart
  const handleAddToCart = (productID, productName) => {
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
      <Toaster />
    </div>
  );
};

export default Shop;
