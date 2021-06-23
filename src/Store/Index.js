import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "./hotel-slice";
import cartSlice from "./cart-slice";
import vegonlySlice from "./vegonly-slice";

const store = configureStore({
  reducer: {
    hotel: hotelSlice.reducer,
    cart: cartSlice.reducer,
    vegonly: vegonlySlice.reducer,
  },
});
export default store;

// I in file name is capatilised.
