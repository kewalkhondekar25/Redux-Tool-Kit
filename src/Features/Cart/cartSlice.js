import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Utils/data";

const initialState = {
    cartItems: data,
    amount: 0,
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
        },
        calculateTotals: (state) => {
            let amount = 0;
            let price = 0;
            state.cartItems.forEach(item => {
                amount += item.qty;
                price += item.qty * item.price;
            });
            state.amount = amount;
            state.total = price;
        }
    }
});

console.log(cartSlice);

export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;