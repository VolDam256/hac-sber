import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 100,
    },
    reducers: {
        add: (state) => {
            state.count += 1
        },
        minus: (state) => {
            state.count -= 1
        }
    }
})

export const { add, minus } = counterSlice.actions;
export default counterSlice.reducer