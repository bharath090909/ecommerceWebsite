import { useContext } from "react";
import Card from "../../UI/Card";
import Product from "./Product";
import ProductContext from "../../Store/product-context";
const Products = (props) => {
  const ctx = useContext(ProductContext);
  if (ctx.isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Card>
      <Product products={ctx.products} />
    </Card>
  );
};

export default Products;
