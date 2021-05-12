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

  const handleClick = (e) => {
    e.preventDefault();
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
    <div className="form-holder">
      <hr className="form" />
      <h1 className="form">ADD NEW BOOK</h1>
      <form className="form" id="form" onSubmit={handleClick}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <select name="category" onChange={handleChange} required>
          <option value="" disabled selected>Category</option>

          {options.map((option) => (
            <option key={Math.random()} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BooksForm;
