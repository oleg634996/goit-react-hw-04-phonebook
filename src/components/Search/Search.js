import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function Search({ onSearchInput }) {
  // console.log(typeof onSearchInput);
  const searchInput = shortid.generate();
  return (
    <div>
      <h2>Контакты</h2>
      <label htmlFor={searchInput}>Поиск контактов</label>
      <input id={searchInput} onChange={onSearchInput}></input>
    </div>
  );
}
Search.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
};
