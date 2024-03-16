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
    initialState
});

// console.log(cartSlice);

export default cartSlice.reducer;