import { combineReducers } from 'redux'

const user = (state = "", action) => {
    switch (action.type) {
        case "LOGIN_SUCCESSFUL":
            return state, action.value
        case "LOGOUT_SUCCESSFUL":
            return {
               state, user: null
            }
        default:
            return state
    };
};


const locations = (state = [], action) => {
    switch (action.type) {
        case "ADD_BUSINESS":
            return [...state, action.value]
        case "DELETE_BUSINESS":
            const locations = [...state];
            locations.splice(action.value, 1);
            return locations;
        default:
            return state;

    }
};

export default combineReducers({ user, locations })