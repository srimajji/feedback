const apiUrl = process.env.API_URL;

function webAPI(endpoint, requestType, authenticated) {
    const token = localStorage.getItem('ssyx_token') || null;
    let config = {
        type: requestType || 'GET',
        headers: ''
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

export const WEB_API = Symbol('Web API');

export default store => next => action => {
    const webAPI = action[WEB_API];

    if (typeof webAPI === 'undefined') {
        return next(action);
    }

    let { endpoint, types, authenticated } = webAPI;

    const [ requestType, successType, errorType ] = types;

    return webAPI(endpoint, authenticated)
                .then(response => {
                    next({
                        response,
                        authenticated,
                        type: successType
                    });
                })
                .error(error => {
                    next({
                        error: error.message || 'There was an error using webAPI',
                        type: errorType
                    });
                });
}