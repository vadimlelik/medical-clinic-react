import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value: 0
}

export const conuterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value + 1

        },
        decrement: (state, action) => {
            state.value - 1
        }

    }
})


export const {actions: counterActions} = conuterSlice
export const {reducer: counterReducer} = conuterSlice
