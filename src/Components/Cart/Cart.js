import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/CartSlice";
import { motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";

const Cart = () => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart.cartItems);
  const cartCloseHandler = () => {
    dispatch(cartActions.cartOpenClose());
  };
  const total = cartArray.reduce((acc, item) => {
    return acc + Number(item.totalAmountForItem);
  }, 0);
  return (
    <motion.section
      key="box"
      initial={{ x: 450 }}
      animate={{ x: 0 }}
      exit={{ x: 450 }}
      transition={{ duration: 1 }}
      className="fixed right-0 w-[500px] h-[100vh] bg-[#FFF] border-2  z-[300]  "
    >
      <div className=" w-full h-full flex flex-col justify-around px-4 py-4 gap-0 ">
        <div className="flex justify-between text-xl  ">
          <p>Shopping Bag</p>
          <button onClick={cartCloseHandler}>
            <GrFormClose color="black" size="30px" />
          </button>
        </div>
        <div className="w-[400px] bg-black h-[2px] opacity-30"></div>
        <div className="grow overflow-y-scroll ">
          <CartItem />
        </div>
        <div>
          <p>Total:${total}</p>
          <p className="w-full h-8 text-center border-2 text-[#fff] bg-blue-300 mt-4 cursor-pointer">
            CHECKOUT
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Cart;
