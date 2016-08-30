import constants from '../constants';

const initialState = {
    isFetching: false,
    errorMsg: '',
    companies: [],
    companySearchList: []
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
                        description: action.company.description
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
                companies: action.companies.map((company)=> {
                    return Object.assign({}, {
                        id: company._id,
                        name: company.name,
                        alias: company.alias,
                        description: company.description
                    });

                })
            });
        case constants.COMPANY_LIST_SEARCH:
            return Object.assign({}, state, {
                isFetching: false,
                companySearchList: state.companies.filter(company => company.name.indexOf(action.searchTerm) !== -1)
            })
        default:
            return state;
    }
}

export default CompanyReducer;