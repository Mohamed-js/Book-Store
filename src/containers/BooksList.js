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
    <div className="books">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          category={book.category}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default BooksList;
