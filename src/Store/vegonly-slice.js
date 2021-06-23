import { createSlice } from "@reduxjs/toolkit";

const vegonlySlice = createSlice({
  name: "vegonly",
  initialState: { veg: false },
  reducers: {
    changeType(state) {
      state.veg = !state.veg;
    },
  },
});

export const vegonlyActions = vegonlySlice.actions;
export default vegonlySlice;
