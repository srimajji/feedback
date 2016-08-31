import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistState } from 'redux-devtools';
import CombineReducers from '../reducers/CombineReducers';
import api from './api';

const loggerMiddleware = createLogger();

const enhancer = compose(
    persistState(
        window.location.href.match(
            /[?&]debug_sessions=([^&#]+)\b/
        )
    )
);

function configureStore() {
    const store = createStore(
        CombineReducers, 
        enhancer,
        applyMiddleware(
            api,
            loggerMiddleware,
            thunkMiddleware
        )
    )

    return store;
}

export default configureStore;