import React from "react";
import Routing from "./Routing/Routing";
import ProductContextProvider from "./Store/ProductContextProvider";
const App = () => {
  return (
    <div className="text-font-cl font-mono">
      <ProductContextProvider>
        <Routing />
      </ProductContextProvider>
    </div>
  );
};

export default App;
