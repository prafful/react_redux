import { combineReducers } from "redux";
import UserReducers from './reducer-users';
import UserReducerActive from './reduce-user-active';

//use the reducer to create your variable i.e users
const allReducers = combineReducers({
    users:UserReducers,
    activeuser:UserReducerActive
});

export default allReducers;