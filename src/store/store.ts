import {combineReducers} from "redux";
import {boxReducer} from "./reducers/boxesReducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducers = combineReducers({
    boxes: boxReducer
})

export const store = configureStore({
    reducer: rootReducers,
})

export type RootStoreType = ReturnType<typeof rootReducers>