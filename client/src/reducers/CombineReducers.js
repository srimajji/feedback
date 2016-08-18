import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import FeedbackReducer from './FeedbackReducer';
import AuthReducer from './AuthReducer';

const CombineReducers = combineReducers({
    AuthReducer,
    FeedbackReducer,
    routing: routerReducer
});

export default CombineReducers;