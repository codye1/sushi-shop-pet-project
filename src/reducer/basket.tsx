import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IBasket{
  basket: string[]
}

const initialState: IBasket = {
    basket: ['']

}

const  basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductInBasket(state, action: PayloadAction<string>) {
      state.basket.push(action.payload)
    },
    deleteById(state, action: PayloadAction<string>) {
      const indexToRemove = state.basket.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.basket.splice(indexToRemove, 1);
      }
    },
  },
})

export const {  addProductInBasket,deleteById } =  basketSlice.actions


export default  basketSlice;