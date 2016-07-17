import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Feedback from './Feedback';
import Admin from './Admin';
import routes from '../routes.js'
class App extends Component {
    render() {
        const { store } = this.props;
        const history = syncHistoryWithStore(browserHistory, store);
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <Route path='/' component={Admin} />
                        <Route path="/admin" component={Admin} />
                    </Router>
                    <DevTools />
                </div>
            </Provider>
        );
    }
}

export default App;