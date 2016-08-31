import constants from '../constants';

const apiUrl = process.env.API_URL;

function callApi(endpoint, type, authenticated, data) {
    const token = localStorage.getItem('ssyx_token') || null;
    let config = {
        type: type,
        data: data
    };

    if (authenticated) {
        if (token) {
            config.headers = { 'x-access-token' : token }
        } else {
            throw 'No token saved'
        }
    }

    return $.ajax(apiUrl + endpoint, config);
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint, type, actions, authenticated, data } = callAPI;

    const [ requestAction, successAction, errorAction ] = actions;

    return callApi(endpoint, type, authenticated, data)
                .done(response => {
                    next({
                        response,
                        authenticated,
                        type: successAction
                    });
                })
                .error(error => {
                    const errorMsg = JSON.parse(error.responseText).message;
                    if (error.status === 401) {
                        next({
                            errorMsg: errorMsg,
                            type: constants.LOGOUT_SUCCESS
                        })
                    } else {
                        next({
                            errorMsg: errorMsg || 'There was an error using callAPI',
                            type: errorAction
                        });
                    }
                });
}