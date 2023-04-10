

import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name :"counter",
    initialState : {
        value : 0
    },
    reducers : {
        addAction : (state,{payload})=>{
            state.value = state.value +1

        },
        subAction :(state,{payload})=>{
            state.value = state.value-payload
        }
    }
})

export const {addAction,subAction} = counterSlice.actions
export const valueSelector = (a)=> a
const counterReducer = counterSlice.reducer

export default counterReducer