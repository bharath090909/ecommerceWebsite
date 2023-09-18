import { createContext } from "react";

const ProductContext = createContext({ isLoading: false, products: [] });

export default ProductContext;
