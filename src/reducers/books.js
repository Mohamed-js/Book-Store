const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];

    case 'REMOVE_BOOK':
      return [...state].filter((book) => book.id !== action.bid);

    default:
      return state;
  }
};

export default booksReducer;
