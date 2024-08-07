import { api } from './../../src/API';
import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './basket';
import searchActiveSlice from './search';
import authSlice from './auth';

export const store = configureStore({
  reducer: {
    searchActive: searchActiveSlice.reducer,
    basket: basketSlice.reducer,
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
