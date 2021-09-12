import axios from 'axios'

const api_git = axios.create({
  baseURL: 'https://api.github.com/repos'
})
export default api_git