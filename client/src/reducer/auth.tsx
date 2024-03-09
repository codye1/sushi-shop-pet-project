import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { deliveryAddresses, user } from "../API";

interface IAuth{
    isAuth:boolean
    user:user
}

const initialState: IAuth = {
    isAuth:false,
    user:{
        id:"",
        number:"",
        deliveryAddresses:[],
        name:"",
        birthDate:[],
        email:""
    }
}



const authSlice = createSlice({
    name: 'searchActive',
    initialState,
    reducers: {
        authUser(state, action: PayloadAction<user>) {
                state.isAuth = true
                state.user = action.payload
          },
        updAddresses(state, action: PayloadAction<deliveryAddresses[]>){
            state.user.deliveryAddresses=action.payload
        },
        updName(state, action: PayloadAction<string>){
            state.user.name=action.payload
        },
        updEmail(state, action: PayloadAction<string>){
            state.user.email=action.payload
        },
        updBirthDate(state, action: PayloadAction<number[]>){
            state.user.birthDate=action.payload
        }

    },
  })

  export const {  authUser , updAddresses,updBirthDate,updEmail,updName} = authSlice.actions

  export default authSlice;