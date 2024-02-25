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
        deliveryAddresses:[]

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
        }

    },
  })

  export const {  authUser , updAddresses} = authSlice.actions

  export default authSlice;