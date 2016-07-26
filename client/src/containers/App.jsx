import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from '../routes.js'

class App extends Component {
    render() {
        const { store } = this.props;
        const history = syncHistoryWithStore(browserHistory, store);
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} />
                </div>
            </Provider>
        );
    }
}

export default App;