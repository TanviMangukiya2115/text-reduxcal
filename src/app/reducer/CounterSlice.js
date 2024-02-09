import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
     state.value -= action.payload
   },
  },
})

export const {  incrementByAmount,decrementByAmount } = counterSlice.actions

export default counterSlice.reducer