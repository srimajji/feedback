import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistState } from 'redux-devtools';
import CombineReducers from '../reducers/CombineReducers';

const loggerMiddleware = createLogger();

const enhancer = compose(
    persistState(
        window.location.href.match(
            /[?&]debug_sessions=([^&#]+)\b/
        )
    )
);

function configureStore(initialState) {
    const store = createStore(
        CombineReducers, 
        initialState, 
        enhancer, 
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
    
    return store;
}

export default configureStore;