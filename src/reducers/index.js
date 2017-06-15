import { combineReducers } from 'redux';
import BookReducer from './booksReducer';
import ActiveBook from './activeBookReducer';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
