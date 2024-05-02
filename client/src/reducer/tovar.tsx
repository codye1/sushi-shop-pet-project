import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../interfaces';


interface ProductDefault {
    product:IProduct[]
    isLoading:boolean
    error:string
}


const initialState: ProductDefault = {
    product:
    [{
      key:1,
      type:"sets",
      additions:[],
      title:'5',
      id:'s',
      body:'4',
      discount:0,
      price:0,
      img:'ss',
      labels:[],
      harch:{
        weight:1370,
        fats:137.19,
        squirrels:264.67,
        carbohydrates:477.89,
        dung:3569.67
      },
      attributes:'ss',
      sklad:['Skald'],
      bonus:1
    }
    ],
    isLoading : false,
    error:''
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.isLoading=true
    },
  },
})

export const { increment } = productSlice.actions



export default productSlice.reducer