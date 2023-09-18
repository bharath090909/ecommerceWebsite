import { useState } from "react";
import { motion } from "framer-motion";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartSlice";
import FilterBy from "./FilterBy";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();
  const stopBubblingHandler = (e) => {
    e.stopPropagation();
  };
  const addToCartHandler = (e) => {
    e.stopPropagation();
    const wantedObj = props.products.find((item) => {
      return item.id === Number(e.target.id);
    });
    const finalObj = {
      ...wantedObj,
      amount: 1,
      totalAmountForItem: wantedObj.price,
    };
    dispatch(cartActions.addToCart(finalObj));
  };

  const chooseHandler = (e) => {
    setCategory(e.target.id);
  };
  const categoryS = (cat) => {
    if (category === cat) {
      return props.products.filter((item) => item.category === cat);
    }
  };

  const choosingCategory = () => {
    if (category === "all") {
      return props.products;
    }
    if (category === `men's clothing`) {
      return categoryS(`men's clothing`);
    }
    if (category === `women's clothing`) {
      return categoryS(`women's clothing`);
    }
    if (category === `jewelery`) {
      return categoryS(`jewelery`);
    }
    if (category === `electronics`) {
      return categoryS(`electronics`);
    }
  };

  return (
    <section>
      <div onClick={chooseHandler} className="flex gap-5 mt-4 items-center ">
        <p>Filter by:</p>
        <FilterBy category={category} products={props.products} />
      </div>
      <div className=" mt-9 grid gap-8 grid-cols-3 justify-items-center  ">
        {choosingCategory().map((item) => {
          return (
            <div
              key={item.id}
              className="w-[300px]  h-[350px] flex flex-col items-center relative "
            >
              <div className="border-2 group relative truncate cursor-pointer border-black-400">
                <button className="absolute top-2 right-[-30px] cursor-pointer group-hover:right-[20px] transition-all duration-300   ">
                  <div
                    onClick={addToCartHandler}
                    id={item.id}
                    className=" z-[100] w-[30px] h-[30px] absolute  right-[-30px] cursor-pointer group-hover:right-[0px] transition-all duration-300"
                  ></div>
                  <BsPlusCircle
                    size={"30px"}
                    color="red"
                    onClick={stopBubblingHandler}
                    className="-z-50 "
                  />
                </button>
                <Link to={`/products/${item.id}`}>
                  <motion.img
                    className="w-[300px] h-[250px] p-12 scale-75 group-hover:scale-100 transition-all duration-300"
                    src={item.image}
                    alt={item.category}
                  ></motion.img>
                </Link>
              </div>

              <div>
                <p className="opacity-50">{item.category}</p>
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
