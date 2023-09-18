import React from "react";
// import { NavLink } from "react-router-dom";
import { BiSolidCartAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartSlice";
import { useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const openCartHandler = () => {
    dispatch(cartActions.cartOpenClose());
  };
  const itemsArray = useSelector((state) => state.cart.cartItems);

  return (
    <nav>
      <div className="flex justify-between px-[50px] py-[15px] bg-nav-bg items-center sticky top-0  font-semibold shadow-[rgba(0,_0,_0,_0.2)_0px_50px_30px_-7px] ">
        <div>
          <GiClothes size={"40px"} color="#31393C" />
        </div>
        {/* <div className=" hidden sm:flex justify-between gap-11 text-xl ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Home</NavLink>
        </div> */}
        <div className=" hidden relative sm:flex gap-7">
          <BiSolidCartAlt
            onClick={openCartHandler}
            size={"40px"}
            color="blue"
          />
          <div className="rounded-full bg-red-400 z-40 h-6 w-6 absolute text-center left-7 top-4">
            {itemsArray.length}
          </div>
          <AiFillHeart size={"40px"} color="red" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
