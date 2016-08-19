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

export const authUser = (username = string, password = string) => {
    // move ajax call somewhere else
    const uri = apiUri + 'auth';
    // $.ajax({
    //     url: uri,
    //     type: 'POST',
    //     data: {
    //         username: username,
    //         password: password
    //     }}).done((response) => {
    //         console.log(response);
    //         return {
    //             type: constants.AUTHENTICATE,
    //             id: response.id,
    //             name: response.name,
    //             jwtToken: response.token
    //         };
    //     }).fail((error) => {
    //         return { 
    //             type: constants.AUTHENTICATE_FAIL , error: error.message
    //         };
    //     });
    return {
        type: constants.AUTHENTICATE,
        name: username,
        jwtToken: '12323223'
    };
}

export { newFeedback, newCompany, authUser };
