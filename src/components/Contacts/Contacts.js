import PropTypes from 'prop-types';
export default function Contact({ contacts, onDeleteContact }) {
  return (
    <div>
      <table>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <tbody key={id}>
              <tr>
                <th>{name}</th>
                <th>{number}</th>
                <th>
                  <button type="button" onClick={() => onDeleteContact(name)}>
                    удалить
                  </button>
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
Contact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
