import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import userReducer  from "./features/user/userSlice";
import cart from "./features/cart/cart";

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        userState: userReducer,
        cart: cart
    }
})