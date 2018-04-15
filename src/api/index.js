import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'

const api = {
  getPosts () {
    return axios.get(baseUrl)
  },
  getPost (id) {
    return axios.get(baseUrl + id)
  }
}

export default api
