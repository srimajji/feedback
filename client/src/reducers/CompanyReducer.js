import constants from '../constants';

const initialState = {
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
                companies: [
                    ...state.companies, {
                        name: action.name,
                        alias: action.alias,
                        description: action.description
                    }
                ]
            });
        default:
            return state;
    }
}

export default CompanyReducer;