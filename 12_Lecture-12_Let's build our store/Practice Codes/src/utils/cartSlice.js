import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // name of the slice
    name: "cart",
    // initial state pf the slice
    initialState: {
        // items present initially
        items: []
    },
    // reducers (actions in the cartSlice)
    reducers: {
        //  actions -> addItem, removeItem, clearCart
        addItem: (state, action) => {
            // directly mutating the states (which was not allowed in vanilla redux)
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0;
            // state = [], will not work (why?)
        }
    }
})


// cartSlice = {
//     action: {
//         addItem, removeItem, clearCart
//     },
//     reducer:{
//         functional definition of all those actions
//     }
// }

// export actions and reducers from the cartSlice
export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer;