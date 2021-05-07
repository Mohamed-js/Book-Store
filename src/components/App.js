import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import History from './history/History';
import Complaint from './complaint/Complaint';
import Disease from './disease/Disease';
import Refer from './refer/Refer';
import Result from './result/Result';
import Symptoms from './symptoms/Symptoms';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={History} />
            <Route exact path="/complaint" component={Complaint} />
            <Route exact path="/disease/:disease" component={Disease} />
            <Route exact path="/refer/:specialist" component={Refer} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/symptoms/:disease" component={Symptoms} />
          </Switch>
        </Router>
      </>
    </Provider>
  );
};

export default App;
