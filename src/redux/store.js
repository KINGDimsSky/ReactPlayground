import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'

const store = configureStore ({
    reducer: {
        cart: cartReducer
    }
})

console.log ("oncreate Store: ", store.getState())

store.subscribe(() => {
    console.log ("Store CHANGES: ", store.getState())
})



export default store;