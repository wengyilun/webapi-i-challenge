
import {
	FETCH_USERS_STARTED,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAILURE,
	FETCH_USER_STARTED,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	SIGNUP_USER_STARTED,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAILURE,
	UPDATE_USER_STARTED,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAILURE,
	DELETE_USER_STARTED,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAILURE
} from "../actions";


const initialState = {
	driverSignupStarted: false,
	driverLoginStarted: false,
	users:[],
}

export const adminReducer = (state = initialState, action)=>{
	switch(action.type){
		// GET USERS
		case FETCH_USERS_STARTED:
			return {...state,
				driverSignupStarted:true,
				serverMessage: 'Creating Driver Account...'
			}
		case FETCH_USERS_SUCCESS:
			return {...state,
				driverSignupStarted:false,
				users:action.payload,
				serverMessage: 'Creating Driver Account Success'
			}
		
		case FETCH_USERS_FAILURE:
			return {...state,
				driverSignupStarted:false,
				serverMessage:action.payload,
			}
		// GET USER BY ID
		case FETCH_USER_STARTED:
			return {...state,
				driverLoginStarted:true,
				serverMessage: 'Logging in...'
			}
		case FETCH_USER_SUCCESS:
			return {...state,
				driverLoginStarted:false,
				serverMessage: 'Login Success'
			}
		case FETCH_USER_FAILURE:
			
			return {...state,
				driverLoginStarted:false,
				serverMessage:action.payload
			}
		
		// POST ADD USER
		case SIGNUP_USER_STARTED:
			return {...state,
				driverLoginStarted:true,
				serverMessage: 'Logging in...'
			}
		case SIGNUP_USER_SUCCESS:
			return {...state,
				driverLoginStarted:false,
				serverMessage: 'Login Success'
			}
		case SIGNUP_USER_FAILURE:
			
			return {...state,
				driverLoginStarted:false,
				serverMessage:action.payload
			}
		// PUT / UPTDATE USER
		case UPDATE_USER_STARTED:
			return {...state,
				driverLoginStarted:true,
				serverMessage: 'Logging in...'
			}
		case UPDATE_USER_SUCCESS:
			return {...state,
				driverLoginStarted:false,
				serverMessage: 'Login Success'
			}
		case UPDATE_USER_FAILURE:
			
			return {...state,
				driverLoginStarted:false,
				serverMessage:action.payload
			}
		// DELETE USER
		case DELETE_USER_STARTED:
			return {...state,
				driverLoginStarted:true,
				serverMessage: 'Logging in...'
			}
		case DELETE_USER_SUCCESS:
			return {...state,
				driverLoginStarted:false,
				serverMessage: 'Login Success'
			}
		case DELETE_USER_FAILURE:
			return {...state,
				driverLoginStarted:false,
				serverMessage:action.payload
			}
		default:
			return {...state}
	}
}
