import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/slice';
import { filterReducer } from './Filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
 });



