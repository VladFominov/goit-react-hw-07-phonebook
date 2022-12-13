import {createAsyncThunk} from "@reduxjs/toolkit";
import { addNewContactToBook, deleteContactFromBook, fetchAllContacts } from "Services/api";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const contacts = await fetchAllContacts();
          
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
    
    try {

      const saveContact = await addNewContactToBook(contact);
      
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
     
      return contactId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

