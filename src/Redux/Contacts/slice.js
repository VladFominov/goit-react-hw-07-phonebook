import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialState,

  reducers: {
    addContacts(state, action) {
      if (state.contacts.some(({ name }) => name === action.payload.name)) {
        return alert(action.payload.name + ' is already in contacts');
      }

      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
