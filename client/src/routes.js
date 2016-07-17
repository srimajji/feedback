import React from 'react';
import { Route } from 'react-router';
import Feedback from './containers/Feedback.jsx';
import Admin from './containers/Admin.jsx';

export default (
    <Route path='/' component={Feedback}>
        <Route path='admin' component={Admin}/>
    </Route>
)