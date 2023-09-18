import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: { isOpen: false, cartItems: [] },
  reducers: {
    cartOpenClose(state) {
      state.isOpen = !state.isOpen;
    },

    addToCart(state, action) {
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      if (!cartItem) {
        state.cartItems.push(action.payload);
      } else {
        cartItem.amount++;
        cartItem.totalAmountForItem = (
          cartItem.amount * cartItem.price
        ).toFixed(2);
      }
    },
    removeFromCart(state, action) {
      const cartItem = state.cartItems.find(
        (item) => item.id === Number(action.payload.id)
      );
      state.cartItems.forEach((item, index) => {
        const condition = item.id === Number(action.payload.id);
        if (
          (condition && action.payload.amount === 0) ||
          (condition && cartItem.amount <= 1)
        ) {
          state.cartItems.splice(index, 1);
        } else if (condition && action.payload.amount === null) {
          cartItem.amount = cartItem.amount - 1;
          cartItem.totalAmountForItem = cartItem.amount * cartItem.price;
        }
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
