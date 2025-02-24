import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
    state = {
    cart: [{id: 1, qty: 20}],
    login: false
},
 action
) => {
    switch(action.type) {
        case "ADD_TO_CART": 
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
            case "SET_LOGIN":
                return {
                    ...state,
                    login: action.payload
                };
        default :
        return state;
    }
}

// store
const store = legacy_createStore(cartReducer)
console.log ("Oncreate Store : ", store.getState())

// subscribe 
store.subscribe(() => {
    console.log ("STORE CHANGE: ", store.getState())
})

// dispatch
const action1 = { type: "ADD_TO_CART", payload: {id:2, qty: 20}};
const action2 = {type: "ADD_TO_CART", payload: {id:3, qty: 50}}
const action3 = {type: "SET_LOGIN", payload: true}
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)