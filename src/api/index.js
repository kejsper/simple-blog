import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/'

const api = {
  getPosts () {
    return axios.get(baseUrl + 'posts')
  },
  getPost (id) {
    return axios.get(baseUrl + id)
  }
}

export default api
