import PropTypes from 'prop-types';

function App(props) {
  const { name } = props;
  return (
    <div className="App">
      <h1>
        From App component === Hello,
        {name}
      </h1>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'world',
};

export default App;
