import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    test: 'testing'
}

export const counterSlice = createSlice({
    name: 'counter', 
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            console.log(state.test)
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer