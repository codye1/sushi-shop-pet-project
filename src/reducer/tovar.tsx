import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../Interfaces';


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
      action:0,
      price:'1',
      photo:'ss',
      labels:[],
      harch:{
        weight:1370,
        fats:137.19,
        squirrels:264.67,
        carbohydrates:477.89,
        dung:3569.67
      },
      sklad:['Skald'],
      filadelfiya:false
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