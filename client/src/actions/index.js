import constants from '../constants';

const apiUri = 'http://localhost:3000/api/';


export const newFeedback = (feedback) => {
    return {
        type: constants.FEEDBACK_NEW,
        title: feedback.title,
        body: feedback.body
    };
}

export const newCompany = (company) => {
    return {
        type: constants.COMPANY_NEW,
        name: company.name,
        alias: company.alias,
        description: company.description
    };
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
                        localStorage.setItem('user_jwtToken', response.jwtToken)
                        }
                    )
                    .error((error) => console.log(error));
    }
}

export const logoutUser = () => {
    localStorage.removeItem('user_jwtToken');
    return { type: constants.LOGOUT_SUCCESS };
}