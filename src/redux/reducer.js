import { combineReducers } from 'redux';
import historyReducer from './reducers/history';
import diseaseReducer from './reducers/disease';
import symptomsReducer from './reducers/symptoms';

const reducer = combineReducers({
  history: historyReducer,
  diseases: diseaseReducer,
  symptoms: symptomsReducer,
});

export default reducer;
