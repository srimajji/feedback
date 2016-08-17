import React from 'react';
import { Route, IndexRoute } from 'react-router';

import FeedbackContainer from './containers/FeedbackContainer';
import CompanyContainer from './containers/CompanyContainer';
import NewCompanyContainer from './containers/NewCompanyContainer';
import MainContainer from './containers/MainContainer';
import HomeContainer from './containers/HomeContainer';

export default (
    <Route path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
    </Route>
)