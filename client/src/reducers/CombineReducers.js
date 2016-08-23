import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import FeedbackReducer from './FeedbackReducer';
import AuthReducer from './AuthReducer';
import CompanyReducer from './CompanyReducer';

const CombineReducers = combineReducers({
    AuthReducer,
    CompanyReducer,
    FeedbackReducer,
    routing: routerReducer
});

export default CombineReducers;