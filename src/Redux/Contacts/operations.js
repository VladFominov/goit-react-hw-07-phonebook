import {createAsyncThunk} from "@reduxjs/toolkit";
import { addNewContactToBook, deleteContactFromBook, fetchAllContacts } from "Services/api";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const contacts = await fetchAllContacts();
            // console.log(contacts);
    return contacts;
         }
        catch (err) { 
            return thunkAPI.rejectWithValue(err);
        }
    }   
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    console.log(contact);
    try {

      const saveContact = await addNewContactToBook(contact);
      // console.log(saveContacts );
      return saveContact;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
       await deleteContactFromBook(contactId);
      // console.log(saveContacts );
      return contactId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

