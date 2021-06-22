import { createSlice } from "@reduxjs/toolkit";

const intial={
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState:intial,
    reducers: {
        addItem(state, action) {
            const newitem = action.payload;
            const existingItem = state.items.find(item => item.id === newitem.id);
            
            if (!existingItem) {
                if(state.totalQuantity===0){
                    state.totalQuantity++;
                    state.totalAmount= state.totalAmount+(newitem.price-newitem.price*newitem.discount/100)
                    state.items.push(
                        {
                            id: newitem.id,
                            price: newitem.price,
                            quantity: 1,
                            totalPrice: newitem.price,
                            name: newitem.name,
                            discount: newitem.discount,
                            hotel_name:newitem.hotel_name
                        });
                }
                else{
                    const hotel=state.items[0].hotel_name;
                    if(newitem.hotel_name===hotel){
                        state.totalQuantity++;
                        state.totalAmount= state.totalAmount+(newitem.price-newitem.price*newitem.discount/100)
                        state.items.push(
                            {
                                id: newitem.id,
                                price: newitem.price,
                                quantity: 1,
                                totalPrice: newitem.price,
                                name: newitem.name,
                                discount: newitem.discount,
                                hotel_name:newitem.hotel_name
                            });
                    }
                    else{
                        console.log("Modal")
                    }
                }
                
            }
            else{
                state.totalQuantity++;
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice+newitem.price;
                state.totalAmount= state.totalAmount+(newitem.price-newitem.price*newitem.discount/100)
            }
            
            
        },
        removeItem(state, action) {
            const id=action.payload;
            state.totalQuantity--;
            const existingItem = state.items.find((item)=> item.id===id);
            if(existingItem.quantity===1){
                state.items = state.items.filter((item)=> item.id !== id);
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice - existingItem.price;
            }
            state.totalAmount= state.totalAmount-(existingItem.price-existingItem.price*existingItem.discount/100)
         },
        clearbag(state){
            state.items=[];
            state.totalQuantity=0;
            state.totalAmount=0;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;