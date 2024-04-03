import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

// app store (containing an object which is a collection of reducers of all the slices)
// reducers are basically the state managers of all the slices inside the Redux Store
const appStore = configureStore({
    // add the slices to configure store
    // the app store has one big reducer object which contains the reducer of each slice
    reducer: {
        cart: cartReducer
            // user : userReducer
    }
})
export default appStore;