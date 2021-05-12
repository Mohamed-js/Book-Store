import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_FILTER, REMOVE_BOOK } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const { books } = useSelector((state) => state);
  let booksToView;

  if (filter !== 'All') {
    booksToView = books.filter((book) => book.category === filter);
  } else {
    booksToView = books;
  }

  const handleClick = (e) => {
    dispatch(REMOVE_BOOK(e.target.value));
  };

  const handleChange = (e) => {
    dispatch(CHANGE_FILTER(e.target.value));
  };

  return (
    <div className="books">
      <CategoryFilter handleChange={handleChange} />
      {booksToView.map((book) => (
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
