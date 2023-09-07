import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';
import Notification from './Notification/Notification';

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

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 ? (
          <Filter filterContact={this.changeFilter} />
        ) : (
          <Notification text={'Your phonebook is empty. Add first contact!'} />
        )}

        <ContactList
          contactList={visibleContacts}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}
