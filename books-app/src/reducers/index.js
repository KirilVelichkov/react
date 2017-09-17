import { combineReducers } from 'redux';
import booksReducer from './booksReducer';

export function books() {
  return [
    { title: 'Javascript: The Good Parts', pages: 199 },
    { title: 'Harry Potter', pages: 200 },
    { title: 'The Dark Tower', pages: 300 },
    { title: 'Eloquent Ruby', pages: 1 }
  ];
}
const rootReducer = combineReducers({
  books: books,
  booksReducer: booksReducer
});

export default rootReducer;
