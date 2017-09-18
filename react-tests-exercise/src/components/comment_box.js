import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/commentActions';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { comment: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            comment: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault;

        this.props.saveComment(this.state.comment);
        this.setState({
            comment: ''
        });
    }

    render() {
        return (
            <form className="comment-box" onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}


export default connect(null, actions)(CommentBox);
