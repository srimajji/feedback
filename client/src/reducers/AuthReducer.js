import constants from '../constants';

const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('user_jwtToken') ? true : false,
    errorMsg: '',
    user: {
        id: null,
        name: null,
        username: null
    }
};

function AuthReducer(state = initialState, action) {
    switch(action.type) {
        case constants.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.user
            });
        case constants.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMsg: '',
                user: action.user
            });
        case constants.LOGIN_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMsg: action.errorMsg
            });
        case constants.LOGOUT_SUCCESS:
            return Object.assign({}, state, initialState);
        default: 
            return state;
    }
}

export default AuthReducer;