import * as actionTypes from './actionTypes';

export function selectBook(book) {
    return {
        type: actionTypes.BOOK_SELECTED,
        payload: book
    };
}