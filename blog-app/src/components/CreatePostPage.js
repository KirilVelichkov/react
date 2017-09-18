import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router';
import _ from 'lodash';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title for Post'
    },
    categories: {
        type: 'input',
        label: 'Enter some categories for this post'
    },
    content: {
        type: 'textarea',
        label: 'Post content'
    }
};

class CreatePostPage extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.renderField = this.renderField.bind(this);
    }

    onSubmit(post) {
        this.props.createPost(post).
            then(() => {
                this.context.router.push('/');
            });
    }

    renderField(fieldConfig, field) {
        const fieldHelper = this.props.fields[field];

        return (<div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
            <label>{fieldConfig.label}</label>
            <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
            <div className="text-help">
                {fieldHelper.touched ? fieldHelper.error : ''}
            </div>
        </div>);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h3>Create new Post</h3>
                {_.map(FIELDS, this.renderField)}
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

    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `* Enter a ${field}`;
        }
    });

    return errors;
}

export default reduxForm({
    form: 'CreatePost',
    fields: _.keys(FIELDS),
    validate: validate
}, null, { createPost })(CreatePostPage);