import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comment_reducer';
import * as actionTypes from '../../src/actions/actionTypes';

describe('Comment Reducer Tests', () => {
    it('handles action with unknown type', () => {
        expect(commentReducer(undefined, {})).to.be.instanceof(Array);
        expect(commentReducer(undefined, {})).to.eql([]);
    });


    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: actionTypes.SAVE_COMMENT, payload: 'new comment' };

        expect(commentReducer([], action)).to.eql(['new comment']);
    });
});