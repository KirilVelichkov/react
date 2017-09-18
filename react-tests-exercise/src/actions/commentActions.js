import * as actionTypes from './actionTypes';


export function saveComment(comment) {
    return {
        type: actionTypes.SAVE_COMMENT,
        payload: comment
    };
}