import {configureStore } from '@reduxjs/toolkit'

import hotelSlice from './hotel-slice'
import cartSlice from './Cart-slice';

const store = configureStore({
    reducer: {
        hotel: hotelSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;