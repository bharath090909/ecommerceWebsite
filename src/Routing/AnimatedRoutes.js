import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import ProductDetails from "../Pages/ProductDetails";
import Home from "../Pages/Home";
import { useContext } from "react";
import ProductContext from "../Store/product-context";

const AnimatedRoutes = () => {
  const location = useLocation();
  const ctx = useContext(ProductContext);
  const products = ctx.products;

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:productId"
          element={<ProductDetails items={products} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
