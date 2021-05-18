import axios from 'axios'

const api_git = axios.create({
  baseURL: 'https://api.github.com'
})
export default api_git