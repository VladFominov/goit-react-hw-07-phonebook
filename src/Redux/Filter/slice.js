import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',

  initialState: initialState,

  reducers: {
    filtered(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { filtered } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
