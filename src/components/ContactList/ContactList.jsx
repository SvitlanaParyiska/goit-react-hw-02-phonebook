import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contactList, handleDelete, filterItem }) => {
  return (
    <div className="container">
      <List>
        {(!filterItem ? contactList : filterItem).map(el => (
          <ContactItem contact={el} key={el.id} handleDelete={handleDelete} />
        ))}
      </List>
    </div>
  );
};

export default ContactList;
