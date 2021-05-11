const InitialState = {
  books: [
    { id: 1, title: 'The Jungle', category: 'Action' },
    { id: 2, title: 'The Mummy', category: 'History' },
    { id: 3, title: 'Baby Shark', category: 'Kids' },
  ],
};

const booksReducer = (state = InitialState, action) => {
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
