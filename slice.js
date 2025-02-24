import {configureStore, createSlice} from "@reduxjs/toolkit" 

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        login: false
    },
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
        },
        setLogin(state, action){
          state.login = action.payload
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

console.log ("Oncreate Store : ", store.getState())

store.subscribe(() => {
    console.log ("STORE CHANGE: ", JSON.stringify(store.getState()))
})

store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 20}))
store.dispatch(cartSlice.actions.addToCart({id: 2, qty: 10}))
store.dispatch(cartSlice.actions.setLogin(true))


