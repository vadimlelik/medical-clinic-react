import {createSlice} from '@reduxjs/toolkit'
import {CounterSchema} from "../types/counterSchema";


const initialState: CounterSchema = {
    value: 0,
}

export const conuterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1

        },
        decrement: (state) => {
            state.value -=1
        }

    }
})


export const {actions: counterActions} = conuterSlice
export const {reducer: counterReducer} = conuterSlice
