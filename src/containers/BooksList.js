import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const { books } = useSelector((state) => state);
  //   console.log();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.id} title={book.title} category={book.category} />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
