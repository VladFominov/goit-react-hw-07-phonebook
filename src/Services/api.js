import axios from 'axios';

//639596f590ac47c6806e69f2.mockapi.io/

export const fetchAllContacts = async () => {
  const { data } = await axios.get(
    `https://639596f590ac47c6806e69f2.mockapi.io/contacts`
  );
  
  return data;
};

export const addNewContactToBook = async contact => {
  const { data } = await axios.post(
    `https://639596f590ac47c6806e69f2.mockapi.io/contacts/`,contact
  );

  return data;
};

export const deleteContactFromBook = async contactId => {
  const { data } = await axios.delete(
    `https://639596f590ac47c6806e69f2.mockapi.io/contacts/${contactId}`
  );

  return data;
};
