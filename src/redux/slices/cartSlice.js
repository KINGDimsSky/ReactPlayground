import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("product")) || []
    },
    reducers : {
        addToCart: (state, action) => {
            const itemsExist = state.data.find((item) => {return item.id === action.payload.id})
            itemsExist ? itemsExist.qty++ : state.data.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;


