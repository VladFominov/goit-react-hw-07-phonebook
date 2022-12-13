import React, { useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// import { nanoid } from 'nanoid';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/Contacts/operations';

import BorderExample from './Spiner/Spiner';

export const App = () => {

  const { isloading } = useSelector(
    state => state.contacts.contacts.items
  );

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
   }, [dispatch]);
 

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isloading && <BorderExample />}

      <ContactList />
    </div>
  );
};
// export default App;
