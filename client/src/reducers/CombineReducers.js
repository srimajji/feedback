import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import FeedbackReducer from './FeedbackReducer';

const CombineReducers = combineReducers({
    FeedbackReducer,
    routing: routerReducer
});

export default CombineReducers;