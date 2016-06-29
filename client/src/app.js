import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Feedback from './components/Feedback';

ReactDOM.render(
    <AppContainer
        component={ Feedback }
    />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./components/Feedback', ()=> {
        ReactDOM.render(
            <AppContainer component={ require('./components/Feedback').default }
            />,
            document.getElementById('root')
        );
    });
}