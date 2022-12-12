
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  InputForm,
  Label,
  Input,
  InputNumber,
  FormContainer,
  BtnAdd,
  Span,
} from './Form.styled';
import { addContact } from 'Redux/Contacts/operations';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
   const contacts = useSelector(state => state.contacts.contacts.items);
 const dispatch = useDispatch();

  const handleChange = e => {
   
    const { name, value } = e.target;
    switch (name) {
      case "name" :
         setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default: console.log('pls, fill correct data');
        break;
    };
  };

  const handelSubmit = e => {
    e.preventDefault();
     if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
       return alert(name + ' is already in contacts');
     }
    dispatch(addContact({ name, phone, id: nanoid() }));
    setName('');
    setPhone('');
  };

    return (
      <FormContainer>
        <InputForm onSubmit={handelSubmit}>
          <Label>
            <Span>Name</Span>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <Span>Number</Span>
            <InputNumber
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <BtnAdd type="submit">Add contact</BtnAdd>
        </InputForm>
      </FormContainer>
    );
  }


export default Form;
