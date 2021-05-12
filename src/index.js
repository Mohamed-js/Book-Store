import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers';

const InitialState = {
  books: [
    {
      id: `${Math.floor(Math.random() * 100)}`,
      title: 'The Jungle',
      category: 'Action',
    },
    {
      id: `${Math.floor(Math.random() * 100)}`,
      title: 'The Mummy',
      category: 'History',
    },
    {
      id: `${Math.floor(Math.random() * 100)}`,
      title: 'Baby Shark',
      category: 'Kids',
    },
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
