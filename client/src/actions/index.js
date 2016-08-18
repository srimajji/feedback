import constants from '../constants';

const apiUri = 'http://localhost:3000/api/';

const newFeedback = (feedback) => {
    return {
        type: constants.FEEDBACK_NEW,
        title: feedback.title,
        body: feedback.body
    };
}

const newCompany = (company) => {
    return {
        type: constants.COMPANY_NEW,
        name: company.name,
        description: company.description
    };
}

const authUser = (username, password) => {
    const uri = ''
    $.ajax(uri, { username: username, password: password })
        .done((response) => {
            console.log(response);
        });

    // dispatch({
    //     type: constants.AUTHENTICATE,
    //     username: username,
    //     password: password
    // });
}

export { newFeedback, newCompany, authUser };