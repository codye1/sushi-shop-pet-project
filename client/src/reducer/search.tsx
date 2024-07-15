import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IsearchActive {
  searchActive: boolean;
  searchInput: string;
}

const initialState: IsearchActive = {
  searchActive: false,
  searchInput: 'null',
};

const searchActiveSlice = createSlice({
  name: 'searchActive',
  initialState,
  reducers: {
    setSearchActive(state, action: PayloadAction<boolean>) {
      state.searchActive = action.payload;
    },
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchActive, setSearchInput } = searchActiveSlice.actions;

export default searchActiveSlice;
