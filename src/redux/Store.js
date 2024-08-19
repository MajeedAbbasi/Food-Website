import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice"
import CartSlice from "./slices/CartSlice";
import SearchSlice from "./slices/SearchSlice"
const store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice,
        search: SearchSlice,
    }
});
export default store