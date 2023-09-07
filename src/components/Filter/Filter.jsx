import React from 'react';
import { Input, Title } from './Filter.styled';

const Filter = ({ value, filterContact }) => {
  return (
    <div>
      <Title>Filter by name</Title>
      <Input
        type="text"
        name="filter"
        onChange={filterContact}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};

export default Filter;
