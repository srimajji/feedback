import React from 'react';
import { Route, IndexRoute } from 'react-router';

import FeedbackContainer from './containers/FeedbackContainer';
import NewFeedbackContainer from './containers/NewFeedbackContainer';
import CompanyContainer from './containers/CompanyContainer';
import NewCompanyContainer from './containers/NewCompanyContainer';
import MainContainer from './containers/MainContainer';
import HomeContainer from './containers/HomeContainer';
import AuthContainer from './containers/AuthContainer';

export default (
    <Route path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='auth' component={AuthContainer} />
        <Route path='submissions' component={FeedbackContainer}>
            <Route path='new' component={NewFeedbackContainer} />
        </Route>
        <Route path='companies' component={CompanyContainer} />
    </Route>
)