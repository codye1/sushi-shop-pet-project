
import { api } from './../../src/API';
import { configureStore } from '@reduxjs/toolkit'
import { setsSlice } from './tovar';


export const store = configureStore({
  reducer: {
    sets: setsSlice.reducer,
    [api.reducerPath]:api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch