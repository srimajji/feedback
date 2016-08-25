import constants from '../constants';

const initialState = {
    isFetching: true,
    error: null,
    companies: [{
        name: 'Best Buy Fremont', 
        alias: 'bestbuy',
        description: 'Electronic store'
    }]
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
                error: null,
                companies: [
                    ...state.companies, {
                        id: action.company._id,
                        name: action.company.name,
                        alias: action.company.alias,
                        description: action.company.description
                    }
                ]
            });
        case constants.COMPANY_NEW_FAIL:
            return Object.assign({}, state, {
                error: action.error
            });
        case constants.COMPANY_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                error: null,
                companies: action.companies.map((company)=> {
                    return Object.assign({}, {
                        id: company._id,
                        name: company.name,
                        alias: company.alias,
                        description: company.description
                    });
                    
                })
            });
        default:
            return state;
    }
}

export default CompanyReducer;