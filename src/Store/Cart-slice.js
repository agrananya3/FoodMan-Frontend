import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed:false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;

    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount =
        state.totalAmount +
        (newItem.price - (newItem.price * newItem.discount) / 100);
      if (!existingItem) {
        if (state.totalQuantity === 0) {
          state.totalQuantity++;
          state.changed=true;
          state.items.push({
            name: newItem.name,
            id: newItem.id,
            price: newItem.price,
            totalPrice: newItem.price,
            quantity: 1,
            discount: newItem.discount,
            hotel_name: newItem.hotel_name,
          });
        } else {
          const hotel = newItem.hotel_name;
          if (state.items[0].hotel_name === hotel) {
            state.totalQuantity++;
            state.changed=true;
            state.items.push({
              name: newItem.name,
              id: newItem.id,
              price: newItem.price,
              totalPrice: newItem.price,
              quantity: 1,
              discount: newItem.discount,
              hotel_name: newItem.hotel_name,
            });
          } else {
            state.totalAmount =
              state.totalAmount -
              (newItem.price - (newItem.price * newItem.discount) / 100);
            console.log("Render Modal");
          }
        }
      } else {
        state.totalQuantity++;
        state.changed=true;
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed=true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalAmount =
        state.totalAmount -
        (existingItem.price -
          (existingItem.price * existingItem.discount) / 100);
    },
    clearBag(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.changed=true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
