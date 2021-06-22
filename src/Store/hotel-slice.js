import { createSlice } from '@reduxjs/toolkit'

const hotelSlice = createSlice({
    name:'hotel',
    initialState: {hotel_id:'h1',hotel_name:'Kerla Restaurent'},
    reducers:{
        changeHotel(state,action){
            state.hotel_id= action.payload.id;
            state.hotel_name=action.payload.hotelname
        }
    }
});

export const hotelchangeActions = hotelSlice.actions;

export default hotelSlice;
