import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./Counter"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export const initialState = store.getState()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
