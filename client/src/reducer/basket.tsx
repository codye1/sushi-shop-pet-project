import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../interfaces';

interface IBasket{
  basket: {[key: string]: {product: IProduct, length: number }}
  additionsIds: {[key: string]: number}
  basketOpen: boolean
}

const initialState: IBasket = {
    basket: {},
    additionsIds:{},
    basketOpen: false
}

const  basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductInBasket(state, action: PayloadAction<IProduct>) {
      if (state.basket[action.payload.id]) {
        state.basket[action.payload.id].length += 1
      }else{
        state.basket[action.payload.id] = {product: action.payload, length: 1}
      }
    },
    deleteById(state, action: PayloadAction<IProduct>) {
      if (state.basket[action.payload.id]) {
        state.basket[action.payload.id].length -= 1
      }
      if (state.basket[action.payload.id]?.length<=0) delete state.basket[action.payload.id]
    },
    setBasketPageStatus(state, action: PayloadAction<boolean>) {
      state.basketOpen = action.payload
    },
    deleteAllElementsByIdFromBasket(state, action: PayloadAction<IProduct>) {
      for (let addition of action.payload.additions) {
        if (state.additionsIds[addition]) state.additionsIds[addition]-= state.basket[action.payload.id].length
        if (state.additionsIds[addition]<=0) delete state.additionsIds[addition]
      }
      delete state.basket[action.payload.id]
    },
    calculateAdditions(state) {
      state.additionsIds = {}
      for(let product in state.basket){
        for (let i = 0; i < state.basket[product].length; i++) {
          for(let addition of state.basket[product].product.additions){
            state.additionsIds[addition]? state.additionsIds[addition] +=1 : state.additionsIds[addition] = 1;
          }
        }
      }
    },
    deleteAllElementsFromBasket(state) {
      state.additionsIds = {}
      state.basket = {}
    }
  },
})
export const {  addProductInBasket,deleteById,setBasketPageStatus,deleteAllElementsByIdFromBasket,deleteAllElementsFromBasket,calculateAdditions} =  basketSlice.actions


export default  basketSlice;