import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Feedback from './Feedback';
import DevTools from './DevTools';

class App extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Feedback />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}

export default App;