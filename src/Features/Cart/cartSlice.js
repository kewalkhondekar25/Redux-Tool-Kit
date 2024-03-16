import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Utils/data";

const initialState = {
    cartItems: data,
    amount: 1,
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
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        }
    }
});

console.log(cartSlice);

export const {clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;