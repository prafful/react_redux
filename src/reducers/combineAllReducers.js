import { combineReducers } from "redux";
import UserReducers from './reducer-users';

//use the reducer to create your variable i.e users
const allReducers = combineReducers({
    users:UserReducers,
});

export default allReducers;