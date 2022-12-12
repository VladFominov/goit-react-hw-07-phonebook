import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/slice';
import { filterReducer } from './Filter/slice';


// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedContactsReducer = persistReducer(
//   contactsPersistConfig,
//   contactsReducer
// );

// const filterPersistConfig = {
//   key: 'filter',
//   storage,
//   whitelist: ['filter'],
// };

// const persistedFilterReducer = persistReducer(
//   filterPersistConfig,
//   filterReducer
// );

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
 });


// export const persistor = persistStore(store);
