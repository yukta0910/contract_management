import { combineReducers } from "redux";
import dataReducer from './userReducer'

const reducers = combineReducers({
    data : dataReducer
})

export default reducers;


