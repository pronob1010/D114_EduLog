import { combineReducers } from "redux";
import { userReducer } from './userreducer';
import { courseReducer } from './coursereducer';


export const rootReducer = combineReducers({
    user : userReducer, 
    course : courseReducer,
})