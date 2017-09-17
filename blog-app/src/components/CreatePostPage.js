import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router';

class CreatePostPage extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(post) {
        this.props.createPost(post).
            then(() => {
                this.context.router.push('/');
            });
    }


    render() {
        const {
            fields: { title, categories, content },
            handleSubmit
        } = this.props;


        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h3>Create new Post</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-success">Create</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

CreatePostPage.contextTypes = {
    router: PropTypes.object
};

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = '* Enter a title';
    }

    if (!values.categories) {
        errors.categories = '* Enter categories';
    }

    if (!values.content) {
        errors.content = '* Enter content';
    }

    return errors;
}

export default reduxForm({
    form: 'CreatePost',
    fields: ['title', 'categories', 'content'],
    validate: validate
}, null, { createPost })(CreatePostPage);