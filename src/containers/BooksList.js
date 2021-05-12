import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_BOOK } from '../actions';
import Book from '../components/Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state);

  const handleClick = (e) => {
    dispatch(REMOVE_BOOK(e.target.value));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Handle</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            handleClick={handleClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
