import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);

      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      // state.cartTotal += product.price * product.amount
      state.cartTotal += product.price;

      // state.tax = 0.1 * state.cartTotal
      // state.orderTotal = state.cartTotal + state.shipping + state.tax
      // localStorage.setItem('cart', JSON.stringify(state))

      cartSlice.caseReducers.calculateTotals(state);
      toast.success("item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, amount, price } = action.payload;

      const item = state.cartItems.find((i) => i.cartID == cartID);
      state.numItemsInCart += amount - item.amount;
      // state.cartTotal += item.price * (amount - item.amount)
      if (state.cartTotal + price > 1) {
        state.cartTotal += price;
      }
      item.price = amount * Math.abs(price);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    editItem2: (state, action) => {
      const { cartID, amount, price } = action.payload;

      console.log(amount, price);

      const item = state.cartItems.find((i) => i.cartID == cartID);
      state.numItemsInCart += amount - item.amount;
      // state.cartTotal += item.price * (amount - item.amount)
      if (state.cartTotal + price > 1) {
        state.cartTotal += price - item.price;
      }
      item.price = price;
      item.amount = amount;
      console.log(item.price);
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      state.tax = 0 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      //   state.orderTotal = state.cartTotal;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem, editItem2 } =
  cartSlice.actions;

export default cartSlice.reducer;
