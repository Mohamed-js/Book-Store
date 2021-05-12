import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../actions';

const BooksForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    id: '',
    title: '',
    category: 'Action',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleClick = () => {
    // Add the book
    dispatch(
      CREATE_BOOK({ ...book, id: `${Math.floor(Math.random() * 100)}` }),
    );
    // Reset state
    setBook({
      id: '',
      title: '',
      category: 'Action',
    });
    // Reset inputs
    document.getElementById('form').reset();
  };

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
    <form className="form" id="form">
      <input name="title" placeholder="Title" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        {options.map((option) => (
          <option key={Math.random()} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleClick}>
        ADD
      </button>
    </form>
  );
};

export default BooksForm;
