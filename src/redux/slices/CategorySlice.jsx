import { createSlice } from "@reduxjs/toolkit";
import { GrAction } from "react-icons/gr";

const CategorySlice = createSlice({
    name: "category",
    initialState: {
        category: "All",
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
    },

});
export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;