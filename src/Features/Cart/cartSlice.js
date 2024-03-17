import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Utils/data";

const initialState = {
    cartItems: data,
    amount: 69,
    total: 0,
    isLoading: false
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        },
        increase: (state, action) => {
            const id = action.payload;
            const tempItem = state.cartItems.find(item => item.id === id);
            tempItem.qty = tempItem.qty + 1;
        },
        decrease: (state, action) => {
            const id = action.payload;
            const tempItem = state.cartItems.find(item => item.id === id);
            tempItem.qty = tempItem.qty - 1;
        } 
    }
});

console.log(cartSlice);

export const {clearCart, removeItem, increase, decrease} = cartSlice.actions;
export default cartSlice.reducer;