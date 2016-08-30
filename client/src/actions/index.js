import constants from '../constants';

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
    return dispatch => {
        return $.ajax({
            url: companyUrl,
            type: 'post',
            data: newCompany,
            headers: { 'x-access-token' : getToken() }
        })
        .done((response) => {
            dispatch({
                type: constants.COMPANY_NEW_SUCCESS,
                company: response
            });
        })
        .error((error) => {
            dispatch({
                type: constants.COMPANY_NEW_FAIL,
                error: error
            });
        });
    };
}

export const getCompanyList = () => {
    const url = apiUrl + 'companies';
    return dispatch => {
        return $.ajax({
            url: url,
            type: 'get',
            headers : { 'x-access-token' : getToken() }
        })
        .done(response => {
            dispatch({
                type: constants.COMPANY_LIST_SUCCESS,
                companies: response
            });
        })
        .error(error => {
            dispatch({
                type: constants.COMPANY_LIST_FAIL,
                error: error
            });
        });
    }
}

export const searchCompanies = (companies, searchTerm) => {
    return {
        type: constants.COMPANY_LIST_SEARCH,
        companies: companies,
        searchTerm: searchTerm,
    };
}

export const authUser = (username = string, password = string) => {
    // move ajax call somewhere else
    const uri = apiUrl + 'auth';
    const reqData = {
        username: username,
        password: password
    };
    return dispatch => {
        return $.post(uri, reqData)
                    .done((response) => {
                        dispatch({
                            type: constants.LOGIN_SUCCESS,
                            user: response
                        });
                        localStorage.setItem('ssyx_token', response.jwtToken)
                        }
                    )
                    .error((error) => console.log(error));
    }
}

export const logoutUser = () => {
    localStorage.removeItem('ssyx_token');
    return { type: constants.LOGOUT_SUCCESS };
}