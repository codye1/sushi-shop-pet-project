import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../interfaces';

interface IBasket{
  basket: IProduct[]
  basketAdditions:string[]
  basketOpen:boolean
  quantityProduct:{ [key: string]: number }
  quantityOverNormAdditions:{ [key: string]: number }
}

const initialState: IBasket = {
    basket: [],
    basketAdditions:["paket"],
    basketOpen:false,
    quantityProduct: {["paket"]:1},
    quantityOverNormAdditions:{}
}

const  basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductInBasket(state, action: PayloadAction<IProduct>) {
      if (action.payload.type!="addition") {
        state.basket.push(action.payload)
        state.quantityProduct[action.payload.id]>0? state.quantityProduct[action.payload.id]++ : state.quantityProduct[action.payload.id] = 1
        for (let i = 0; i < action.payload.additions.length; i++) {
          state.quantityProduct[action.payload.additions[i]]>0? state.quantityProduct[action.payload.additions[i]]++ : state.quantityProduct[action.payload.additions[i]] = 1
          state.basketAdditions.push(action.payload.additions[i])
        }
      }else{
        state.basketAdditions.push(action.payload.id)
        state.quantityProduct[action.payload.id]? state.quantityProduct[action.payload.id]++ : state.quantityProduct[action.payload.id] = 1
        state.quantityOverNormAdditions[action.payload.id]? state.quantityOverNormAdditions[action.payload.id]++ : state.quantityOverNormAdditions[action.payload.id] = 1
      }
    },
    deleteById(state, action: PayloadAction<IProduct>) {
      if (action.payload.type!="addition") {
        state.quantityProduct[action.payload.id]--
        state.basket.splice(state.basket.indexOf(action.payload), 1);
        for (let i = 0; i < action.payload.additions.length; i++) {
          state.quantityProduct[action.payload.additions[i]]--
          state.basketAdditions.splice(state.basketAdditions.indexOf(action.payload.additions[i]), 1);
        }
      }else{
        state.quantityProduct[action.payload.id]--
        state.quantityOverNormAdditions[action.payload.id]--
        state.basketAdditions.splice(state.basketAdditions.indexOf(action.payload.id), 1);
      }
    },
    setBasketPageStatus(state, action: PayloadAction<boolean>) {
      state.basketOpen = action.payload
    },
    deleteAllElementsByIdFromBasket(state, action: PayloadAction<IProduct>) {
      if (action.payload.type=="addition") {
       state.basketAdditions = state.basketAdditions.filter((p)=>p != action.payload.id)

       state.quantityProduct[action.payload.id] = 0
       state.quantityOverNormAdditions[action.payload.id] = 0
      }else{
        state.basket = state.basket.filter((p)=>p.id != action.payload.id)
        for (let k = 0; k < state.quantityProduct[action.payload.id]; k++) {
          for (let i = 0; i < action.payload.additions.length; i++) {
            state.quantityProduct[action.payload.additions[i]]--
            state.basketAdditions.splice(state.basketAdditions.indexOf(action.payload.additions[i]), 1);
          }
        }
        state.quantityProduct[action.payload.id] = 0
      }
    },
    deleteAllElementsFromBasket(state) {
      state.basket = []
      state.basketAdditions = []
      state.quantityProduct= {["paket"]:1}
      state.quantityOverNormAdditions={}
    },
  },
})
export const {  addProductInBasket,deleteById,setBasketPageStatus,deleteAllElementsByIdFromBasket,deleteAllElementsFromBasket} =  basketSlice.actions


export default  basketSlice;