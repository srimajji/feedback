import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Feedback from '../containers/Feedback';
import Home from '../containers/Home';

export default (
    <Route path='/' component={Home}>
        <IndexRoute component={Feedback} />
    </Route>
)