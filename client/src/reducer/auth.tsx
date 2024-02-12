import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAuth{
    isAuth:boolean
    number:string
}

const initialState: IAuth = {
    isAuth:false,
    number:""
}



const authSlice = createSlice({
    name: 'searchActive',
    initialState,
    reducers: {
        authUser(state, action: PayloadAction<string>) {
                state.isAuth = true
                state.number=action.payload
          },

    },
  })

  export const {  authUser } = authSlice.actions

  export default authSlice;