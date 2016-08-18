import { createStore, combineReducers, compose } from 'redux';
import { persistState } from 'redux-devtools';
import CombineReducers from '../reducers/CombineReducers';

const enhancer = compose(
    persistState(
        window.location.href.match(
            /[?&]debug_sessions=([^&#]+)\b/
        )
    )
);

function configureStore(initialState) {
    const store = createStore(CombineReducers, initialState, enhancer)
    return store;
}

export default configureStore;