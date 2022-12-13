import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialState,

  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending]: (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    [addContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [deleteContact.pending]: (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
    },
    [deleteContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});
export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
