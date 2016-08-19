import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistState } from 'redux-devtools';
import CombineReducers from '../reducers/CombineReducers';
import DevTools from '../containers/DevTools';

const loggerMiddleware = createLogger();

const enhancer = compose(
    DevTools.instrument(),
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
            thunkMiddleware
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers/CombineReducers', () => 
            store.replaceReducer(require('../reducers/CombineReducers').default)
        );
    }
    return store;
}

export default configureStore;