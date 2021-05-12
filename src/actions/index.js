const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = (bookid) => ({
  type: 'REMOVE_BOOK',
  bid: bookid,
});

const FILTER_BOOK = (filter) => ({
  type: 'FILTER_BOOK',
  payload: filter,
});

export { CREATE_BOOK, REMOVE_BOOK, FILTER_BOOK };
