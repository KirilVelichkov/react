import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostsPage from './components/PostsPage';
import CreatePostPage from './components/CreatePostPage';
import DetailedPostPage from './components/DetailedPostPage';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={PostsPage} />
        <Route path="posts/new" component={CreatePostPage} />
        <Route path="posts/:id" component={DetailedPostPage} />
    </Route>
);