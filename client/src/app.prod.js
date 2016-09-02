import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import './stylesheets/global.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import configureStore from './utils/configureStore';


const store = configureStore();

render(
	<App store={store} />,
	document.getElementById('root')
);