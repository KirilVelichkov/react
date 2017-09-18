import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList Test', () => {
    let component;

    beforeEach(() => {
        const props = { comments: ['comment1', 'comment2', 'comment3'] };
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('comment1');
        expect(component).to.contain('comment2');
        expect(component).to.contain('comment3');
    });
});