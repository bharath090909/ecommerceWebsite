import React from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Navigaiton-Bar/NavBar";
import Card from "../UI/Card";
import { cartActions } from "../Store/CartSlice";
import Cart from "../Components/Cart/Cart";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.productId;
  const product = props.items.find((pro) => pro.id === +id);
  const open = useSelector((state) => state.cart.isOpen);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        ...product,
        ...{ amount: 1, totalAmountForItem: product.price },
      })
    );
  };

  return (
    <>
      <AnimatePresence>{open && <Cart />}</AnimatePresence>
      <NavBar />
      <Card>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex items-center w-full h-[100vh] ">
            <div className="m-10">
              <img
                className="w-[800px] h-[300px]"
                alt="gallary"
                src={product.image}
              ></img>
            </div>
            <div>
              <p className="text-3xl font-semibold">{product.title}</p>
              <p className="text-xl">${product.price}</p>
              <p className="text-justify my-3">{product.description}</p>
              <button
                onClick={addToCartHandler}
                className="border-2 border-black p-2 my-2"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductDetails;
