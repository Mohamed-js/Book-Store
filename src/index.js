import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers';

const InitialState = {
  books: [
    { id: 1, title: 'The Jungle', category: 'Action' },
    { id: 2, title: 'The Mummy', category: 'History' },
    { id: 3, title: 'Baby Shark', category: 'Kids' },
  ],
};

const store = createStore(reducer, InitialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
