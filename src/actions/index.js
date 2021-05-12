const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = (bookid) => ({
  type: 'REMOVE_BOOK',
  bid: bookid,
});

const CHANGE_FILTER = (filter) => ({
  type: 'CHANGE_FILTER',
  category: filter,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
