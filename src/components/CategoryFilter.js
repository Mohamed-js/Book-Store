import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CategoryFilter = (props) => {
  const { handleChange } = props;
  const filter = useSelector((state) => state.filter);
  const options = [
    '',
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <div className="book row">
      <label htmlFor="category">
        Filter
        <select onChange={handleChange} value={filter}>
          {options.map((option) => (
            <option key={Math.random()} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleChange: () => 0,
};
