import axios from 'axios'

const dev = false
const BASE_URL =  "http://localhost:5000"

// export default function (){
// const token = localStorage.getItem('token') || Math.random().toString(16).substring(-8)
export const localhost =
				 axios.create({
					baseURL:BASE_URL,
					timeout:60000,
					headers:{
						'Content-Type':'application/json',
						'Authorization': localStorage.getItem('token') || ''
					}
				})
//
