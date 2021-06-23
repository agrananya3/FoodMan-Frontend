import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotel",
  initialState: { hotel_id: "h1", hotel_name: "Kerla Restaurent" },
  reducers: {
    changeHotel(state, action) {
      state.hotel_id = action.payload.id;
      state.hotel_name = action.payload.hotel_name;
    },
  },
});

export const hotelActions = hotelSlice.actions;
export default hotelSlice;
