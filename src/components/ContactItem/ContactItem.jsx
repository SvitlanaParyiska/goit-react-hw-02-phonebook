import React from 'react';
import { Button, Item } from './ContactItem.styled';

const ContactItem = ({ contact, handleDelete }) => {
  return (
    <Item>
      <p>
        {contact.name} : {contact.number}
      </p>

      <Button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;
