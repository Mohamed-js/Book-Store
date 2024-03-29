import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import NavBar from './components/Navbar';
import './assets/stylesheets/app.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
