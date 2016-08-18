import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import './stylesheets/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import configureStore from './utils/configureStore';
const store = configureStore();
const container = <AppContainer><App store={store}/></AppContainer>;

ReactDOM.render(
    container,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/App', ()=> {
        const RootContainer = require('./containers/App').default; 
        ReactDOM.render(
            <AppContainer>
                <RootContainer store={ store } />
            </AppContainer>,
            document.getElementById('root')
        );
    });
} 