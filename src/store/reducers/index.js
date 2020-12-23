import { combineReducers } from 'redux';
import todosReducer from '../slices/todosSlice';
import filterReducer from '../slices/filterSlice';
import countriesReducer from '../slices/countriesSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  countries: countriesReducer,
});

export default rootReducer;
