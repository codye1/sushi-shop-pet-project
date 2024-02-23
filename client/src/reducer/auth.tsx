import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { user } from "../API";

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

    },
  })

  export const {  authUser } = authSlice.actions

  export default authSlice;