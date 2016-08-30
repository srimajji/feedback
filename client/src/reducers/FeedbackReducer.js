import constants from '../constants';

const initialState = {
    isFetching: false,
    errorMsg: null,
    feedbacks: [{title: 'Sample submission', body: 'submission body'}],
};

function FeedbackReducer(state = initialState, action) {
    switch(action.type) {
        case constants.FEEDBACK_NEW:
            return Object.assign({}, state, {
                isFetching: true
            });
        case constants.FEEDBACK_NEW:
            return Object.assign({}, state, {
                isFetching: false,
                feedbacks: [
                    ...state.feedbacks, {
                        title: action.title,
                        body: action.body
                    }
                ]
            });
        case constants.FEEDBACK_NEW_FAIL: 
            return Object.assign({}, state, {
                isFetching: false,
                errorMsg: action.errorMsg
            });
        case constants.FEEDBACK_LIST_NEW:
            return Object.assign({}, state, {
                isFetching: false,
                feedbacks: actions.feedbacks.map((feedback) => {
                    return Object.assign({}, {
                        id: feedback._id,
                        title: feedback.title,
                        body: feedback.body,
                        createdAt: feedback.createdAt,
                        company: feedback.company
                    });
                })
            });
        case constants.FEEDBACK_LIST_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                errorMsg: action.errorMsg
            });
        default:
            return state;
    }
}

export default FeedbackReducer;