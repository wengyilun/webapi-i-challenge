import {combineReducers} from "redux";
import {driverReducer} from './driverReducer'
import {riderReducer} from './riderReducer'
import {adminReducer} from './adminReducer'

export default combineReducers({
	driverReducer,
	riderReducer,
	adminReducer
})
