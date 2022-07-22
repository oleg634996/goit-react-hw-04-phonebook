import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export function Form({ onSubmitForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  const inputOnChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const formSubmit = event => {
    event.preventDefault();

    onSubmitForm({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={formSubmit}>
      <h1>Phonebook</h1>
      <label htmlFor={nameId}>Имя</label>
      <input
        id={nameId}
        type="text"
        name="name"
        onChange={inputOnChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
      <label htmlFor={numberId}>Телефон</label>
      <input
        id={numberId}
        type="tel"
        name="number"
        onChange={inputOnChange}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></input>
      <button type="submit">Добавить</button>
    </form>
  );
}
export default Form;
Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
