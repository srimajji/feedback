import constants from '../constants';

const initialState = {
    isFetching: false,
    errorMsg: '',
    companies: [],
};

function CompanyReducer(state = initialState, action) {
    switch(action.type) {
        case constants.COMPANY_NEW:
            return Object.assign({}, state, {
                isFetching: true
            });
        case constants.COMPANY_NEW_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMsg: null,
                companies: [
                    ...state.companies, {
                        id: action.company._id,
                        name: action.company.name,
                        alias: action.company.alias,
                        description: action.company.description,
                        categories: action.company.categories
                    }
                ]
            });
        case constants.COMPANY_NEW_FAIL:
            return Object.assign({}, state, {
                errorMsg: action.errorMsg
            });
        case constants.COMPANY_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMsg: null,
                receivedAt: Date.now(),
                companies: action.response.map((company)=> {
                    return Object.assign({}, {
                        id: company._id,
                        name: company.name,
                        alias: company.alias,
                        description: company.description,
                        categories: company.categories,
                        updatedAt: company.updatedAt
                    });
                })
            });
        default:
            return state;
    }
}

export default CompanyReducer;