import constants from '../constants';

const initialState = {
    id: null,
    name: null,
    jwtToken: null
};

function AuthReducer(state = initialState, action) {
    switch(action.type) {
        case constants.AUTHENTICATE:
            console.log(state);
            return Object.assign({}, state, {
                id: action.id,
                name: action.name,
                jwtToken: action.jwtToken
            });
        default: 
            return state;
    }
}

export default AuthReducer;