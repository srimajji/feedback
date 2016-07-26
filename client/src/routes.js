import React from 'react';
import { Route, IndexRoute } from 'react-router';

import FeedbackContainer from './containers/FeedbackContainer';
import CompanyContainer from './containers/CompanyContainer';
import Home from './containers/Home';

export default (
    <Route path='/' component={Home}>
        <IndexRoute component={FeedbackContainer} />
        <Route path="companies" component={CompanyContainer} />
    </Route>
)