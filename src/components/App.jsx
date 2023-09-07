import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = dataByForm => {
    const isAlreadyExist = this.state.contacts.find(
      el => el.name === dataByForm.name
    );
    if (isAlreadyExist)
      return alert(`${dataByForm.name} is already in contacts.`);

    const newContact = {
      ...dataByForm,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = filterValue => {
    this.setState(prev => ({
      filter: prev.contacts.filter(el =>
        el.name.toLowerCase().includes(filterValue.toLowerCase())
      ),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter filterContact={this.filterContact} />
        <ContactList
          contactList={this.state.contacts}
          filterItem={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}
