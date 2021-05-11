import React from 'react';

const BooksForm = () => {
  const options = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <div className="form">
      <input placeholder="Title" />
      <select>
        {options.map((option) => (
          <option key={Math.random()} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button type="button">ADD</button>
    </div>
  );
};

export default BooksForm;
