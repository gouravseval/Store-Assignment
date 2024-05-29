import { configureStore } from '@reduxjs/toolkit'
import  storeDataReducer  from '../slices/DetailsSlice'
export const store = configureStore({
  reducer: {
    counter : storeDataReducer
  },
})