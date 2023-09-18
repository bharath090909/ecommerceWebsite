import NavBar from "../Components/Navigaiton-Bar/NavBar";
import Products from "../Components/Products/Products";
import Cart from "../Components/Cart/Cart";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Header from "../Components/Hero-Header/Header";

const Home = (props) => {
  const open = useSelector((state) => state.cart.isOpen);
  // const getProducts = (products) => {
  //   props.onGetProducts(products);
  // };

  return (
    <>
      <AnimatePresence>{open && <Cart />}</AnimatePresence>
      <NavBar />
      <Header />
      <Products />
    </>
  );
};

export default Home;
