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
			.done(response => {
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

export const createUser = (user) => {
	const config = {
		url: apiUrl + 'auth/signup',
		method: 'POST',
		data: user
	}

	return dispatch => {
		dispatch({ type: constants.USER_NEW_REQUEST });

		$.ajax(config)
			.done(response => {
				localStorage.setItem('ssyx_token', response.token)
				dispatch({
					type: constants.USER_NEW_SUCCESS,
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
				dispatch({ type: constants.USER_NEW_FAIL, errorMsg: error.responseJSON.message });
			});

	}

}

export const newFeedback = (feedback) => {
	return {
		[CALL_API]: {
			type: 'POST',
			endpoint: 'feedbacks',
			authenticated: true,
			data: feedback,
			actions: [constants.FEEDBACK_NEW_REQUEST, constants.FEEDBACK_NEW_SUCCESS, constants.FEEDBACK_NEW_FAIL]
		}
	}
}

export const fetchFeedbacks = (userId) => {
	return {
		[CALL_API]: {
			type: 'GET',
			endpoint: 'feedbacks',
			authenticated: true,
			data: { userId: userId },
			actions: [constants.FEEDBACK_LIST_REQUEST, constants.FEEDBACK_LIST_SUCCESS, constants.FEEDBACK_LIST_ERROR]
		}
	}
}

export const newCompany = (company) => {
	const categories = [{ name: 'Employee' }, { name: 'Store' }, { name: 'Suggestions' }];
	const feedbackStatuses = [{ name: 'Open' }, { name: 'In review' }, { name: 'Closed' }];
	const newCompany = Object.assign({}, company, { categories: categories, feedbackStatuses: feedbackStatuses });

	return {
		[CALL_API]: {
			endpoint: 'companies',
			type: 'POST',
			authenticated: true,
			data: newCompany,
			actions: [constants.COMPANY_NEW, constants.COMPANY_NEW_SUCCESS, constants.COMPANY_NEW_FAIL]
		}
	}
}

export const fetchCompanyList = () => {
	return {
		[CALL_API]: {
			endpoint: 'companies',
			type: 'GET',
			authenticated: true,
			actions: [constants.COMPANY_LIST_REQUEST, constants.COMPANY_LIST_SUCCESS, constants.COMPANY_LIST_FAIL]
		}
	}
}

export const logoutUser = () => {
	localStorage.removeItem('ssyx_token');
	return { type: constants.LOGOUT_SUCCESS };
}