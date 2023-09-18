import { useState, useEffect } from "react";
import ProductContext from "./product-context";

const ProductContextProvider = (props) => {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      console.log("hi");
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();
      setProducts(data);
    };

    fetchedData().catch((error) => {
      setIsLoading(false);
    });
    setIsLoading(false);
  }, []);
  console.log(Products);
  return (
    <ProductContext.Provider
      value={{ isLoading: isLoading, products: Products }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
