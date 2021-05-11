import PropTypes from 'prop-types';

function App(props) {
  return (
    <div className="App">
      <h1>From App component === Hello, {props.name}</h1>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
};

export default App;
