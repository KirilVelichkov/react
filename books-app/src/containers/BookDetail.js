import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book!</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.booksReducer
    };
}


export default connect(mapStateToProps)(BookDetail);