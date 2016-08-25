import constants from '../constants';

const apiUri = process.env.API_URL;

const getToken = () => {
    return localStorage.getItem('user_token');
}

export const newFeedback = (feedback) => {
    return {
        type: constants.FEEDBACK_NEW,
        title: feedback.title,
        body: feedback.body
    };
}

export const newCompany = (company) => {
    const url = apiUri + 'companies';
    const categories = [ {name: 'Employee'}, {name : 'Store' }, { name: 'Suggestions'}];
    const feedbackStatuses = [ {name: 'Open'} , {name: 'In review'}, {name: 'Closed'}];
    const newCompany = Object.assign({}, company, { categories: categories, feedbackStatuses: feedbackStatuses });
    return dispatch => {
        return $.ajax({
            url: url,
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
    const url = apiUri + 'companies';
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

export const authUser = (username = string, password = string) => {
    // move ajax call somewhere else
    const uri = apiUri + 'auth';
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
                        localStorage.setItem('user_token', response.jwtToken)
                        }
                    )
                    .error((error) => console.log(error));
    }
}

export const logoutUser = () => {
    localStorage.removeItem('user_token');
    return { type: constants.LOGOUT_SUCCESS };
}