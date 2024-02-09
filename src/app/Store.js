import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './reducer/CounterSlice'

export const store = configureStore({
  reducer: {
    counter:CounterSlice
  },
})