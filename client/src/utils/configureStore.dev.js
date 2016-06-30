import { createStore, combineReducers, compose } from 'redux';
import { persistState } from 'redux-devtools';
import CombineReducers from '../reducers/CombineReducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_sessions=([^&#]+)\b/
        )
    )
);

function configureStore(initialState) {
    const store = createStore(CombineReducers, initialState, enhancer)

    if (module.hot) {
        module.hot.accept('../reducers/CombineReducers', () => 
            store.replaceReducer(require('../reducers/CombineReducers').default)
        );
    }
    return store;
}

export default configureStore;