
// DRIVER
import {localhost} from "../utils/axiosAuthLocal";
import axios from 'axios'

export const FETCH_USERS_STARTED = 'FETCH_USERS_STARTED'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const FETCH_USER_STARTED = 'FETCH_USER_STARTED'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export const SIGNUP_USER_STARTED = 'SIGNUP_USER_STARTED'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'

export const UPDATE_USER_STARTED = 'UPDATE_USER_STARTED'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

export const DELETE_USER_STARTED = 'DELETE_USER_STARTED'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

// Update Profile
export const updateUser = (user) => dispatch => {
	console.log('updateUser :: user', user)
	// dispatch({type: UPDATE_USER_STARTED})
	return (
		localhost.put(`/api/users/${user.id}`, user)
		.then(res =>{
			// dispatch({type: UPDATE_USER_SUCCESS, payload: res.data})
			return res.data
		})
		.catch(error => {
			console.log(error.response)
			console.log( error.response.data.error)
			// dispatch({type: UPDATE_USER_FAILURE, payload: error.response.data.error})
			return error.response
		})
	)
}

// DRIVER
export const signupUser= (user) => dispatch =>{
	// 	dispatch({type:SIGNUP_USER_STARTED})
	// return (
		return localhost.post('/api/users', user)
		.then(res =>{
			// dispatch({type: SIGNUP_USER_SUCCESS, payload: res.data})
			return res.data
		})
		.catch(error => {
			console.log(error.response)
			console.log( error.response.data.error)
			// dispatch({type: SIGNUP_USER_FAILURE, payload: error.response.data.error})
			return error.response
		})
	// )
}

export const findUser= (userId) => dispatch =>{
	dispatch({type:FETCH_USER_STARTED})
	// return (API.post('/api/login', {...driver, driver:true})
	return localhost.get(`/api/users/${userId}`)
	   .then(res =>{
		   // localhost.setItem('token', res.data.token)
		   dispatch({type: FETCH_USER_SUCCESS, payload: res.data})
		   return res.data
		})
		.catch(err =>{
			console.log('err', err.response.error)
			if (err.response.status === 401) {
				dispatch({type: FETCH_USER_FAILURE, payload: err.response.data.message})
			}
			return err.response
		})
}

export const getUsers= () => dispatch =>{
	dispatch({type:FETCH_USERS_STARTED})
	console.log('FETCH_USERS_STARTED',FETCH_USERS_STARTED)
	// return (API.post('/api/login', {...driver, driver:true})
	return localhost.get('/api/users')
	   .then(res =>{
	   	  console.log('res',res)
			// localStorage.setItem('token', res.data.token)
		   dispatch({type: FETCH_USERS_SUCCESS, payload: res.data})
		   return res.data
		})
		.catch(err =>{
			console.log('err', err.response.error)
			if (err.response.status === 401) {
				dispatch({type: FETCH_USERS_FAILURE, payload: err.response.data.message})
			}
			return err.response
		})
}

export const deleteUser= (userId) => dispatch =>{
	dispatch({type:DELETE_USER_STARTED})
	const id = userId
	// return (API.post('/api/login', {...driver, driver:true})
	return localhost.delete(`/api/users/${userId}`)
	   .then(res =>{
	   		console.log('deleteUser id:',id)
			// localStorage.setItem('token', res.data.token)
			if(res.status === 202){
				dispatch({type: DELETE_USER_SUCCESS, payload: id})
			}else{
				dispatch({type: DELETE_USER_FAILURE, payload: res.data.message})
			}
		})
		.catch(err =>{
			console.log('err', err.response.error)
			if (err.response.status === 500) {
				dispatch({type: DELETE_USER_FAILURE, payload: err.response.data.message})
			}
			return err.response
		})
}

