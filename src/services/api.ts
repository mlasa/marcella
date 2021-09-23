import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mypagemlasa.herokuapp.com',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "OPTIONS, DELETE, POST, GET, PATCH, PUT",
    "Access-Control-Allow-Credentials": "true"
  }
})
export default api