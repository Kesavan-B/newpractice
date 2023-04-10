import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/Index";

const rootReducer = combineReducers({
    adder : counterReducer
    
})
const store = configureStore({reducer:rootReducer})


export default store
