const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        books: action.book,
      };

    case 'REMOVE_BOOK':
      return {
        books: action.book,
      };

    default:
      return state;
  }
};

export default booksReducer;
