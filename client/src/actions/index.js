import constants from '../constants';
import { CALL_API } from '../utils/api';

const apiUrl = process.env.API_URL;
const authUrl = apiUrl + 'auth';
const feedbackUrl = apiUrl + 'feedbacks';
const companyUrl = apiUrl + 'companies';
const userUrl = apiUrl + 'users';

const getToken = () => {
    return localStorage.getItem('ssyx_token');
}

function requestLogin() {
    return {
        type: constants.LOGIN_REQUEST
    }
}

export const loginUser = (username = string, password = string) => {
    const config = {
        url: authUrl,
        method: 'post',
        data: {
            username: username,
            password: password
        }
    }

    return dispatch => {
        dispatch({ type: constants.LOGIN_REQUEST });

        $.ajax(config)
            .done(response=> {
                localStorage.setItem('ssyx_token', response.token)
                dispatch({
                    type: constants.LOGIN_SUCCESS,
                    token: response.token,
                    expiresIn: response.expiresIn,
                    createdAt: response.createdAt,
                    user: {
                        id: response.id,
                        name: response.name,
                        username: response.username
                    },
                })
            })
            .error(error => {
                dispatch({ type: constants.LOGIN_FAIL, errorMsg: error.responseJSON.message });
            });

    }

}

export const newFeedback = (feedback) => {
    return dispatch => {
        return $.ajax({
            url: feedbackUrl,
            type: 'post',
            data: feedback,
            headers: { 'x-access-token' : getToken() }
        })
        .done(response => {
            dispatch({
                type: constants.FEEDBACK_NEW_SUCCESS,
                feedback: response
            })
        })
        .error(error => {
            dispatch({
                type: constants.FEEDBACK_NEW_FAIL,
                error: error
            });
        });
    }
}

export const fetchFeedbacks = () => {
    return {
        [CALL_API]: {
            type: 'GET',
            endpoint: 'feedbacks',
            authenticated: true,
            actions: [ constants.FEEDBACK_LIST_REQUEST, constants.FEEDBACK_LIST_SUCCESS, constants.FEEDBACK_LIST_ERROR]
        }
    }
}

export const getFeedbacks = () => {
    return dispatch => {
        return $.ajax({
            url: feedbackUrl,
            type: 'get',
            headers : { 'x-access-token' : getToken() }
        })
        .done(response => {
            dispatch({
                type: constants.FEEDBACK_LIST_SUCCESS,
                feedbacks: response
            });
        })
        .error(error => {
            dispatch({
                type: constants.FEEDBACK_LIST_FAIL,
                error: error
            });
        });
    }
}

export const newCompany = (company) => {
    const categories = [ {name: 'Employee'}, {name : 'Store' }, { name: 'Suggestions'}];
    const feedbackStatuses = [ {name: 'Open'} , {name: 'In review'}, {name: 'Closed'}];
    const newCompany = Object.assign({}, company, { categories: categories, feedbackStatuses: feedbackStatuses });

    return {
        [CALL_API]: {
            endpoint: 'companies',
            type: 'POST',
            authenticated: true,
            data: newCompany,
            actions: [ constants.COMPANY_NEW, constants.COMPANY_NEW_SUCCESS, constants.COMPANY_NEW_FAIL ]
        }
    }
}

export const fetchCompanyList = () => {
    return {
        [CALL_API]: {
            endpoint: 'companies',
            type: 'GET',
            authenticated: true,
            actions: [ constants.COMPANY_LIST_REQUEST, constants.COMPANY_LIST_SUCCESS, constants.COMPANY_LIST_FAIL]
        }
    }
}

export const logoutUser = () => {
    localStorage.removeItem('ssyx_token');
    return { type: constants.LOGOUT_SUCCESS };
}