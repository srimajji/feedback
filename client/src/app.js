import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import configureStore from './utils/configureStore.dev';
const store = configureStore();
const container = <AppContainer><App store={store}/></AppContainer>;

ReactDOM.render(
    container,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/App', ()=> {
        ReactDOM.render(
            container,
            document.getElementById('root')
        );
    });
} 