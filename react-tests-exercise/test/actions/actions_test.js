import { expect } from '../test_helper';
import { saveComment } from '../../src/actions/commentActions';
import * as actionTypes from '../../src/actions/actionTypes';

describe('Actions Tests', () => {
    describe('saveComment()', () => {
        it('has correct type', () => {
            const { type } = saveComment();
            expect(type).to.equal(actionTypes.SAVE_COMMENT);
        });

        it('has correct payload', () => {
            const { payload } = saveComment('new comment');
            expect(payload).to.equal('new comment');
        });
    });

});