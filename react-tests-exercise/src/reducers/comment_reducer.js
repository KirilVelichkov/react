import * as actionTypes from '../actions/actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case actionTypes.SAVE_COMMENT:
            return [...state, action.payload];

        default:
            return state;
    }
}