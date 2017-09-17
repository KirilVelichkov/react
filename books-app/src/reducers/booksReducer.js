import * as actionTypes from '../actions/actionTypes';

export default function booksReducer(state = null, action) {
    switch (action.type) {
        case actionTypes.BOOK_SELECTED:
            return action.payload;

        default:
            return state;
    }
}