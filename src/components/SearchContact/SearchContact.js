import PropTypes from 'prop-types';

export default function SearchContact({ searchContact, onDeleteContact }) {
  // console.log(typeof searchContact);
  // console.log(typeof onDeleteContact);
  return (
    <div>
      <table>
        {searchContact.map(contact => {
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
SearchContact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
