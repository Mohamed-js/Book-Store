import { Provider } from 'react-redux';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import store from './containers/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <BooksList />
          <BooksForm />
        </div>
      </div>
    </Provider>
  );
}

export default App;
