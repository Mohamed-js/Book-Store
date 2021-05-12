import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, category, handleClick,
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" value={id} onClick={handleClick}>
          Remove
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  handleClick: PropTypes.func,
};

Book.defaultProps = {
  id: '1',
  title: 'empty',
  category: 'default',
  handleClick: () => 0,
};

export default Book;
