import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router';

class DetailedPostPage extends React.Component {
    constructor(props) {
        super(props);

        this.id = this.props.params.id;

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchPost(this.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.id)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back to index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button
                    onClick={this.onDeleteClick}
                    className="btn btn-danger pull-xs-right">
                    Delete
                </button>
            </div>
        );
    }
}

DetailedPostPage.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(DetailedPostPage);
