import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartSlice";
import { GrFormClose } from "react-icons/gr";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const removeFromCartHandler = (e) => {
    console.log(e.target);
    dispatch(
      cartActions.removeFromCart({
        id: e.currentTarget.parentNode.id,
        amount: 0,
      })
    );
  };
  const incrementHandler = (e) => {
    dispatch(
      cartActions.addToCart({ id: Number(e.target.parentNode.parentNode.id) })
    );
  };
  const decrementHandler = (e) => {
    dispatch(
      cartActions.removeFromCart({
        id: e.target.parentNode.parentNode.id,
        amount: null,
      })
    );
  };
  const inputChangeHandler = (e) => {};

  return (
    <div>
      {cartItems.map((item, index) => {
        return (
          <div
            id={item.id}
            key={index}
            className="grid grid-cols-4 gap-2 items-center py-6 "
          >
            <div className="w-full h-full row-span-2">
              <img src={item.image} alt={item.cateogry} />
            </div>
            <p className="col-span-2">{item.title}</p>
            <button
              className="justify-self-end self-start"
              onClick={removeFromCartHandler}
            >
              <GrFormClose color="black" size="25px" />
            </button>
            <div className="flex items-center content-center  ">
              <button
                className="w-4 h-6 bg-[#f8f9f5]"
                onClick={decrementHandler}
              >
                -
              </button>
              <input
                className="w-6 h-6 border-2 text-center"
                onChange={inputChangeHandler}
                value={item.amount}
                max="6"
                min="1"
              ></input>
              <button
                className="w-4 h-6 bg-[#f8f9f5]"
                id={item.id}
                onClick={incrementHandler}
              >
                +
              </button>
            </div>
            <p className="opacity-60">${item.price}</p>
            <p>${item.totalAmountForItem}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
