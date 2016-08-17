import constants from '../constants';

const initialState = {
    feedbacks: [{title: 'feedback', body: 'feedback body'}]
};

function FeedbackReducer(state = initialState, action) {
    switch(action.type) {
        case constants.FEEDBACK_NEW:
            return Object.assign({}, state, {
                feedbacks: [
                    ...state.feedbacks, {
                        title: action.title,
                        body: action.body
                    }
                ]
            });
        default:
            return state;
    }
}

export default FeedbackReducer;