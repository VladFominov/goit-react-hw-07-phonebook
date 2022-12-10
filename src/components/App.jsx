import React, { useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { nanoid } from 'nanoid';
import {  useSelector } from 'react-redux';


export const App = () => {
  

  const contacts = useSelector(state => state.contacts.contacts);
 

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

      <Form  />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
// export default App;
