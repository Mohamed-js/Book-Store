const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        books: action.payload,
      };

    case 'REMOVE_BOOK':
      return {
        books: action.payload,
      };

    default:
      return state;
  }
};

export default booksReducer;
