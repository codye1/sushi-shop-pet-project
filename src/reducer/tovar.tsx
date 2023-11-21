import {Tovar } from './../API';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface Seti {
    posti:Tovar[]
    isLoading:boolean
    error:string
}


const initialState: Seti = {
    posti: [{ key:1,title:'5',id:'s',body:'4',action:0,price:1,photo:'ss',shef:false,harch:{
      weight:1370,
      fats:137.19,
      squirrels:264.67,
      carbohydrates:477.89,
      dung:3569.67
  },sklad:['ss'],filadelfiya:false}],
    isLoading : false,
    error:''
}

export const setsSlice = createSlice({
  name: 'set',
  initialState,
  reducers: {
    increment: (state) => {
      state.isLoading=true
    },

  },
})

export const { increment } = setsSlice.actions



export default setsSlice.reducer