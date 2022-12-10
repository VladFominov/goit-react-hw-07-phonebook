import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'Redux/Contacts/slice';

import { Li, BtnOnDelete } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const filteredContact = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const onDelete = id => {
    const contactId = id;
    dispatch(deleteContacts(contactId));
  };
  return (
    <ul>
      {filteredContact().map(({ id, name, number }) => {
        return (
          <Li key={id}>
            {name}: {number}
            <BtnOnDelete type="button" onClick={() => onDelete(id)}>
              Delete
            </BtnOnDelete>
          </Li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
