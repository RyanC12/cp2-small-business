import { combineReducers } from 'redux'
const user = (state = "" ) => state;
const locations = (state = []) => state;

export default combineReducers({ user, locations})