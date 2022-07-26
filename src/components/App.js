import { useState } from 'react';
import shortid from 'shortid';
import Form from './Form/Form';
import Search from './Search/Search';
import SearchContact from './SearchContact/SearchContact';
// import Contact from './Contacts/Contacts';
import useLocalStorage from '../Hooks/Hooks';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const onSubmitForm = data => {
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(
          `Kонтакт ${data.name[0].toUpperCase() + data.name.slice(1)} уже есть `
        )
      : setContacts(prevState => [...prevState, { id: shortid(), ...data }]);
  };

  const onDeleteContact = data => {
    setContacts(prevState =>
      prevState.filter(contact => contact.name !== data)
    );
  };

  const searchContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Form onSubmitForm={onSubmitForm} />
      <Search onSearchInput={event => setFilter(event.target.value)} />

      <SearchContact
        searchContact={searchContact}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
};

export default App;
